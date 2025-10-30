"use client";

import { useState } from "react";
import WatermarkedImage from "@/components/WatermarkedImage";

export default function ImageCarousel({ images = [], alt = "", heightClass = "h-[220px]", roundedClass = "rounded-none" }) {
  const [index, setIndex] = useState(0);
  const hasImages = Array.isArray(images) && images.length > 0;
  const safeImages = hasImages ? images : ["/logo-footer.png"]; // fallback

  const next = () => setIndex((prev) => (prev + 1) % safeImages.length);
  const prev = () => setIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);

  return (
    <div className={`relative w-full ${heightClass} bg-[#F5F5F5] ${roundedClass} overflow-hidden`}>
      {/* Slides */}
      {safeImages.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className={`absolute inset-0 transition-opacity duration-300 ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <WatermarkedImage src={src} alt={alt} className={`w-full ${heightClass} object-cover`} />
        </div>
      ))}

      {/* Controls */}
      {safeImages.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {safeImages.map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${i === index ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}


