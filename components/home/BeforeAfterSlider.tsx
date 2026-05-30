"use client";

import React, { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before (28% Body Fat)",
  afterLabel = "After 12 Weeks (11% Body Fat)",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    
    // Constraint boundaries
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden select-none border border-white/5 shadow-glass cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Before Image (Background) */}
      <img
        src={beforeImage}
        alt="Before transformation state"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none filter grayscale-[40%]"
      />
      
      {/* Before Badge */}
      <div className="absolute bottom-4 left-4 z-10 bg-black/60 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-300 backdrop-blur-md">
        {beforeLabel}
      </div>

      {/* After Image (Foreground Clipped) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={afterImage}
          alt="After transformation state"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width }}
        />
      </div>

      {/* After Badge */}
      <div className="absolute bottom-4 right-4 z-10 bg-primary/20 border border-primary/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
        {afterLabel}
      </div>

      {/* Slider Bar & Drag Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gradient-neon cursor-ew-resize z-20 shadow-neon"
        style={{ left: `${sliderPosition}%` }}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-charcoal-medium border border-primary/50 shadow-neon flex items-center justify-center text-white cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform"
        >
          <MoveHorizontal className="h-4.5 w-4.5 text-primary" />
        </div>
      </div>

      {/* Helper drag visual indicator */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
        <span className="bg-black/40 text-[10px] text-gray-300 font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm animate-pulse-slow">
          Drag Slider To Compare
        </span>
      </div>
    </div>
  );
}
