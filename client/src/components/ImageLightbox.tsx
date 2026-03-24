"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  Minimize2
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}) => {
  const [scale, setScale] = useState(1);
  const [isFit, setIsFit] = useState(true);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.5, 5));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.5, 0.5));
  const handleReset = () => {
    setScale(1);
    setIsFit(true);
  };

  const handleNext = useCallback(() => {
    onIndexChange((currentIndex + 1) % images.length);
    handleReset();
  }, [currentIndex, images.length, onIndexChange]);

  const handlePrev = useCallback(() => {
    onIndexChange((currentIndex - 1 + images.length) % images.length);
    handleReset();
  }, [currentIndex, images.length, onIndexChange]);

  // Support for wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPortal>
        <DialogOverlay className="bg-black/95 backdrop-blur-sm" />
        <DialogContent className="max-w-[100vw] h-[100vh] w-full p-0 bg-transparent border-none shadow-none flex flex-col justify-center items-center overflow-hidden">
          
          {/* Controls Overlay */}
          <div className="absolute top-4 right-4 z-50 flex items-center space-x-2 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={handleZoomOut}>
              <ZoomOut className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={handleZoomIn}>
              <ZoomIn className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={() => setIsFit(!isFit)}>
              {isFit ? <Maximize2 className="h-5 w-5" /> : <Minimize2 className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={handleReset}>
              <RotateCcw className="h-5 w-5" />
            </Button>
            <div className="w-[1px] h-6 bg-white/20 mx-1" />
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Controls */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
            <Button variant="ghost" size="icon" className="text-white bg-black/20 hover:bg-black/40 h-12 w-12 rounded-full" onClick={handlePrev}>
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50">
            <Button variant="ghost" size="icon" className="text-white bg-black/20 hover:bg-black/40 h-12 w-12 rounded-full" onClick={handleNext}>
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Image Container */}
          <div 
            className="w-full h-full flex items-center justify-center cursor-move"
            onWheel={handleWheel}
          >
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className={isFit ? "max-h-[90vh] max-w-[90vw] object-contain" : "min-h-full min-w-full object-cover text-center"}
              style={{ scale }}
              drag
              dragConstraints={{ left: -500 * scale, right: 500 * scale, top: -500 * scale, bottom: 500 * scale }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: scale }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Status Overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>

        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
