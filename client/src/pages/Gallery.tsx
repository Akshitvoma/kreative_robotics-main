import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, Loader2, X, Film } from "lucide-react";

/**
 * MediaItem interface representing Cloudinary resources (images & videos).
 */
export interface MediaItem {
  id: string;
  type: "image" | "video";
  url: string;
  publicId: string;
  createdAt?: string;
}

/**
 * Gallery Page Component
 * Allows users to view images and videos from Cloudinary (using tag-based fetching)
 * in a responsive grid and inspect media in a responsive fullscreen viewer.
 */
export default function Gallery() {
  // --- CLOUDINARY CONFIGURATION ---
  // Images and videos uploaded to your Cloudinary account with this tag will automatically appear here.
  const CLOUD_NAME = "detgusdmt";
  const GALLERY_TAG = "robotic_gallery";
  // --------------------------------

  const STORAGE_KEY = "kreative_robotics_gallery";

  const [media, setMedia] = useState<MediaItem[]>(() => {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (!cached) return [];
    try {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed)) {
        return parsed.map((item: any, index: number) => {
          if (typeof item === "string") {
            const isVideo = item.includes("/video/") || Boolean(item.match(/\.(mp4|webm|ogv|mov)$/i));
            return {
              id: `legacy-${index}`,
              type: isVideo ? "video" : "image",
              url: item,
              publicId: `legacy-${index}`
            };
          }
          return item as MediaItem;
        });
      }
    } catch {
      return [];
    }
    return [];
  });

  const [isLoading, setIsLoading] = useState(true);
  const [errorType, setErrorType] = useState<"security" | "empty" | "none">("none");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // Helper function to get optimized Cloudinary URL for images
  const getOptimizedUrl = (url: string, width = 600) => {
    if (!url.includes("cloudinary.com")) return url;
    return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_limit/`);
  };

  const fetchGalleryMedia = async () => {
    setIsLoading(true);
    setErrorType("none");
    try {
      console.log("Fetching shared gallery media from Cloudinary...");
      const timestamp = Date.now();

      const imagePromise = fetch(
        `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${GALLERY_TAG}.json?timestamp=${timestamp}`
      );
      const videoPromise = fetch(
        `https://res.cloudinary.com/${CLOUD_NAME}/video/list/${GALLERY_TAG}.json?timestamp=${timestamp}`
      );

      const [imageRes, videoRes] = await Promise.allSettled([imagePromise, videoPromise]);

      let mediaList: MediaItem[] = [];
      let securityErrorCount = 0;

      // Process image resources
      if (imageRes.status === "fulfilled") {
        const res = imageRes.value;
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.resources)) {
            const items: MediaItem[] = data.resources.map((item: any) => ({
              id: `image-${item.public_id}`,
              type: "image",
              url: item.secure_url || `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v${item.version}/${item.public_id}.${item.format}`,
              publicId: item.public_id,
              createdAt: item.created_at
            }));
            mediaList.push(...items);
          }
        } else if (res.status === 403) {
          securityErrorCount++;
        }
      }

      // Process video resources
      if (videoRes.status === "fulfilled") {
        const res = videoRes.value;
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.resources)) {
            const items: MediaItem[] = data.resources.map((item: any) => ({
              id: `video-${item.public_id}`,
              type: "video",
              url: item.secure_url || `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v${item.version}/${item.public_id}.${item.format}`,
              publicId: item.public_id,
              createdAt: item.created_at
            }));
            mediaList.push(...items);
          }
        } else if (res.status === 403) {
          securityErrorCount++;
        }
      }

      // Sort combined media items by creation date if available (newest first)
      mediaList.sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        return 0;
      });

      if (mediaList.length === 0) {
        if (securityErrorCount === 2) {
          setErrorType("security");
        } else {
          setErrorType("empty");
        }
      } else {
        setMedia(mediaList);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mediaList));
        console.log("Successfully loaded shared gallery:", mediaList.length, "media items found.");
      }
    } catch (error) {
      console.warn("Could not fetch shared gallery. Using cached version if available.", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryMedia();
  }, []);

  // Keyboard shortcut (Escape) to close fullscreen viewer & lock page scroll
  useEffect(() => {
    if (!selectedMedia) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMedia(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMedia]);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-display font-bold mb-2 text-center"
          >
            <span className="text-primary">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-sm max-w-xl mx-auto text-center"
          >
            Explore amazing creations from our students.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        {isLoading && media.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
            <p className="text-foreground/60">Loading shared gallery...</p>
          </div>
        ) : media.length > 0 ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 lg:gap-8 [column-fill:_balance]">
            {media.map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="break-inside-avoid mb-4 md:mb-6 lg:mb-8 group relative overflow-hidden rounded-2xl border border-border/50 bg-muted/30 cursor-pointer"
                onClick={() => setSelectedMedia(item)}
              >
                {item.type === "video" ? (
                  <div className="relative w-full overflow-hidden rounded-2xl bg-black/40">
                    <video
                      src={item.url}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-sm p-1.5 rounded-full text-white/90 shadow-md pointer-events-none">
                      <Film className="w-4 h-4" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={getOptimizedUrl(item.url)}
                    alt={`Gallery Media ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </motion.div>
            ))}
          </div>
        ) : errorType === "security" ? (
          /* Security Error State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 border-2 border-dashed border-red-500/20 rounded-3xl bg-red-500/5"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
              <Upload className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-red-500 mb-2">Resource List Blocked</h3>
            <p className="text-foreground/60 text-center max-w-md px-4">
              Please go to your <span className="font-bold">Cloudinary Settings</span> &rarr; <span className="font-bold">Security</span> and uncheck <span className="font-bold">"Resource List"</span> under Restricted media types.
            </p>
            <Button
              variant="outline"
              onClick={() => fetchGalleryMedia()}
              className="mt-4 text-red-500 rounded-full"
            >
              Try Again
            </Button>
          </motion.div>
        ) : errorType === "empty" ? (
          /* No Tags Error State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 border-2 border-dashed border-primary/20 rounded-3xl bg-primary/5"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">No Tagged Media Found</h3>
            <p className="text-foreground/60 text-center max-w-md px-4">
              Images and videos must have the tag <span className="font-bold">`{GALLERY_TAG}`</span> in Cloudinary to appear here.
            </p>
            <p className="text-foreground/40 text-sm mt-4 text-center px-4 max-w-md">
              Please add the tag manually in your Media Library or set up an Upload Preset.
            </p>
            <Button
              variant="outline"
              onClick={() => fetchGalleryMedia()}
              className="mt-6 rounded-full"
            >
              Refresh After Tagging
            </Button>
          </motion.div>
        ) : (
          /* Generic Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-border/50 rounded-3xl bg-muted/5"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <ImageIcon className="w-8 h-8" />
            </div>
            <p className="text-foreground/40 font-medium text-center px-4">The gallery is currently empty.</p>
            <p className="text-foreground/30 text-sm mt-1 text-center px-4">New projects will appear here once uploaded with the tag `{GALLERY_TAG}`.</p>
          </motion.div>
        )}
      </div>

      {/* Fullscreen Media Viewer Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-10 select-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedMedia(null);
              }
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              aria-label="Close viewer"
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Media Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center overflow-hidden rounded-xl"
            >
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.url}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-[95vw] max-h-[85vh] md:max-h-[90vh] object-contain rounded-xl shadow-2xl"
                />
              ) : (
                <img
                  src={selectedMedia.url}
                  alt="Fullscreen Media View"
                  className="max-w-[95vw] max-h-[85vh] md:max-h-[90vh] object-contain rounded-xl shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
