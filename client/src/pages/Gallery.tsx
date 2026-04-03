import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";

/**
 * Gallery Page Component
 * Allows users to upload images to Cloudinary (Unsigned Preset)
 * and displays them in a responsive grid.
 */
export default function Gallery() {
  // --- CLOUDINARY CONFIGURATION ---
  // Images uploaded to your Cloudinary account with this tag will automatically appear here.
  const CLOUD_NAME = "detgusdmt";
  const GALLERY_TAG = "robotic_gallery";
  // --------------------------------

  const STORAGE_KEY = "kreative_robotics_gallery";

  const [images, setImages] = useState<string[]>(() => {
    const cached = localStorage.getItem(STORAGE_KEY);
    return cached ? JSON.parse(cached) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorType, setErrorType] = useState<"security" | "empty" | "none">("none");

  // Helper function to get optimized Cloudinary URL
  const getOptimizedUrl = (url: string, width = 500) => {
    if (!url.includes("cloudinary.com")) return url;
    // Inject transformation parameters: auto-format, auto-quality, scaled width
    return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_fill/`);
  };

  const fetchGalleryImages = async () => {
    setIsLoading(true);
    setErrorType("none");
    try {
      console.log("Fetching shared gallery from Cloudinary...");
      const response = await fetch(
        `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${GALLERY_TAG}.json?timestamp=${Date.now()}`
      );

      if (response.ok) {
        const data = await response.json();
        const urls = data.resources.map((res: any) =>
          `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v${res.version}/${res.public_id}.${res.format}`
        );

        if (urls.length === 0) {
          setErrorType("empty");
        } else {
          setImages(urls);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
          console.log("Successfully loaded shared gallery:", urls.length, "images found.");
        }
      } else if (response.status === 404 || response.status === 403) {
        setErrorType("security");
        console.warn("Shared gallery list could not be loaded. Please ensure 'Resource List' is enabled in Cloudinary Security settings.");
      } else {
        throw new Error(`Cloudinary API returned ${response.status}`);
      }
    } catch (error) {
      console.warn("Could not fetch shared gallery. Using cached version if available.", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch all images with our tag from Cloudinary
  useEffect(() => {
    fetchGalleryImages();
  }, []); // Fetch once on mount


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
            Project <span className="text-primary">Gallery</span>
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
        {isLoading && images.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
            <p className="text-foreground/60">Loading shared gallery...</p>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {images.map((url, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border/50 bg-muted/30"
              >
                <img
                  src={getOptimizedUrl(url)}
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">Project {images.length - index}</span>
                </div>
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
              onClick={() => fetchGalleryImages()}
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
            <h3 className="text-lg font-bold text-primary mb-2">No Tagged Images Found</h3>
            <p className="text-foreground/60 text-center max-w-md px-4">
              Images must have the tag <span className="font-bold">`{GALLERY_TAG}`</span> in Cloudinary to appear here.
            </p>
            <p className="text-foreground/40 text-sm mt-4 text-center px-4 max-w-md">
              Please add the tag manually in your Media Library or set up an Upload Preset.
            </p>
            <Button
              variant="outline"
              onClick={() => fetchGalleryImages()}
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
    </div>
  );
}
