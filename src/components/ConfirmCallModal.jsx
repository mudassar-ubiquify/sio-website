"use client";

export default function ConfirmCallModal({ open, phoneText, onConfirm, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[2000] bg-black/60 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg w-full max-w-md shadow-xl">
        <div className="p-5 border-b">
          <p className="roboto-slab font-bold text-lg">Call Seller</p>
        </div>
        <div className="p-5 text-sm text-[#333]">
          <p>Do you want to call</p>
          <p className="mt-1 font-semibold">{phoneText}</p>
        </div>
        <div className="p-4 border-t flex items-center justify-end gap-2">
          <button onClick={onClose} className="py-2 px-4 rounded border">Cancel</button>
          <button onClick={onConfirm} className="py-2 px-4 rounded bg-[#5C9544] text-white">Call</button>
        </div>
      </div>
    </div>
  );
}


