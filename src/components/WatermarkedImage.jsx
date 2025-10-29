"use client";

import { useState, useCallback, useEffect } from "react";

export default function WatermarkedImage({ src, alt = "", className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <>
      <div className="relative group cursor-zoom-in" onClick={open}>
        <img src={src} alt={alt} className={className} />
        {/* Watermark (thumbnail) */}
        <img
          src="/logo.svg"
          alt="O'Shea watermark"
          className="pointer-events-none select-none absolute bottom-2 right-2 h-6 opacity-60 drop-shadow-md transition-opacity group-hover:opacity-80"
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-4"
          onClick={close}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={src}
              alt={alt}
              className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md"
            />
            {/* Watermark (lightbox) */}
            <img
              src="/logo.svg"
              alt="O'Shea watermark"
              className="pointer-events-none select-none absolute bottom-4 right-4 h-10 opacity-70 drop-shadow-md"
            />
            <button
              onClick={close}
              className="absolute -top-3 -right-3 bg-white text-black rounded-full w-8 h-8 text-sm font-bold shadow"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}


