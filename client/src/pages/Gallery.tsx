import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, Loader2, X } from "lucide-react";

/**
 * Gallery Page Component
 * Allows users to upload images to Cloudinary (Unsigned Preset)
 * and displays them in a responsive grid.
 */
export default function Gallery() {
  // --- CLOUDINARY CONFIGURATION ---
  // Replace these with your actual Cloudinary details
  const CLOUD_NAME = "dqi8sg6en";
  const UPLOAD_PRESET = "gallery_upload";
  // --------------------------------

  const STORAGE_KEY = "kreative_robotics_gallery";
  const GALLERY_TAG = "robotic_gallery"; // Unique tag for your gallery

  // Initial state as empty, we will fetch from Cloudinary
  const [images, setImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all images with our tag from Cloudinary
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setIsLoading(true);
        // This URL fetches a list of all images with the specific tag
        // Note: You must enable 'Resource list' in Cloudinary Settings > Security
        const response = await fetch(
          `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${GALLERY_TAG}.json?timestamp=${Date.now()}`
        );

        if (response.ok) {
          const data = await response.json();
          // Construct full URLs from the results
          const urls = data.resources.map((res: any) =>
            `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v${res.version}/${res.public_id}.${res.format}`
          );
          setImages(urls);
        }
      } catch (error) {
        console.warn("Could not fetch shared gallery. Make sure 'Resource list' is enabled in Cloudinary settings.", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  // Function to handle image upload to Cloudinary
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if configuration is set
    if (!CLOUD_NAME || !UPLOAD_PRESET) {
      alert("Please configure your Cloudinary Cloud Name and Upload Preset in Gallery.tsx");
      return;
    }

    setIsUploading(true);

    try {
      // Prepare form data for Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);
      formData.append("tags", GALLERY_TAG); // Tag the image for the shared gallery

      // Upload using Fetch API
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        // Add new image URL to state
        setImages((prev) => [data.secure_url, ...prev]);
      } else {
        console.error("Upload failed:", data);
        alert("Upload failed. Please check your Cloudinary settings.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred during upload.");
    } finally {
      setIsUploading(false);
    }
  };

  // Function to delete an image from the UI
  const handleDelete = (indexToDelete: number) => {
    setImages((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Project <span className="text-primary">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-lg max-w-2xl mx-auto"
          >
            Explore the amazing creations from our students. Upload your own masterpiece to showcase your skills!
          </motion.p>
        </div>

        {/* Upload Section */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <input
              type="file"
              id="gallery-upload"
              className="hidden"
              accept="image/*"
              onChange={handleUpload}
              disabled={isUploading}
            />
            <label htmlFor="gallery-upload">
              <Button
                asChild
                className="rounded-xl px-8 py-6 h-auto text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all gap-2 cursor-pointer"
              >
                <span>
                  {isUploading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <Upload className="w-6 h-6" />
                  )}
                  {isUploading ? "Uploading..." : "Upload Project Image"}
                </span>
              </Button>
            </label>
          </div>
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
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
                  src={url}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Delete Button - Appears on Hover */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent any parent click events
                    handleDelete(index);
                  }}
                  className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:bg-red-600 shadow-lg hover:scale-110"
                  title="Delete image"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">Project {images.length - index}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-border/50 rounded-3xl bg-muted/5"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <ImageIcon className="w-8 h-8" />
            </div>
            <p className="text-foreground/40 font-medium">No images uploaded yet.</p>
            <p className="text-foreground/30 text-sm mt-1">Be the first to share your project!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
