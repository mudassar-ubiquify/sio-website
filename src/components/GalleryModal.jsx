"use client";

import { useState, useEffect } from "react";

export default function GalleryModal({ open, images = [], startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex || 0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") setIndex((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length, onClose]);

  if (!open) return null;
  if (!images || images.length === 0) return null;

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 z-[3000] bg-black/85 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black rounded-lg overflow-hidden flex items-center justify-center">
          <img src={images[index]} alt="Preview" className="max-h-full max-w-full object-contain" />
          {/* Watermark over preview */}
          <img src="/logo.svg" alt="O'Shea watermark" className="pointer-events-none select-none absolute bottom-1/4 left-1/2 transform -translate-x-1/2 h-16 opacity-80 drop-shadow-lg" />

          {/* Controls */}
          {images.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10">‹</button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10">›</button>
            </>
          )}
          <button onClick={onClose} className="absolute top-3 right-3 bg-white text-black rounded-full w-9 h-9 text-base font-bold">×</button>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-3 grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 max-h-[100px] overflow-y-auto">
            {images.map((src, i) => (
              <button key={`${src}-${i}`} onClick={() => setIndex(i)} className={`border ${i === index ? "border-white" : "border-transparent"} rounded overflow-hidden bg-[#111]`}>
                <img src={src} alt="Thumb" className="w-full h-16 object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


