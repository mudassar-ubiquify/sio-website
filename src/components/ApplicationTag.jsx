"use client";

export default function ApplicationTag({ label, iconSrc, className = "" }) {
  return (
    <div className={`bg-[#F6F6F6] border border-[#EAEAEA] rounded-md px-3 py-2 flex items-center gap-2 ${className}`}>
      {iconSrc ? (
        <img src={iconSrc} alt={label} className="w-8 h-8 object-contain" />
      ) : null}
      {label}
    </div>
  );
}


