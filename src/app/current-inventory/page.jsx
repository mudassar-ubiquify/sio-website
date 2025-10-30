"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { listings } from "./data";
import ImageCarousel from "@/components/ImageCarousel";
import ConfirmCallModal from "@/components/ConfirmCallModal";
import { useState } from "react";

export default function CurrentInventory() {
  const { push } = useRouter();
  const [modal, setModal] = useState(null);

  return (
    <div className="px-[20px] lg:px-[100px] pt-[120px] pb-16">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="roboto-slab font-bold text-[32px] lg:text-[42px]">Current Inventory</p>
          <p className="text-sm lg:text-base text-[#444]">Latest equipment available. Contact us for pricing and shipping quotes.</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {listings.map((item) => {
          const sellerPhoneText = item?.seller?.phone || "(817) 415-0311";
          const sellerPhoneDigits = (sellerPhoneText.match(/\d+/g) || []).join("");
          const sellerPhoneHref = sellerPhoneDigits
            ? `tel:+${sellerPhoneDigits.length === 10 ? "1" : ""}${sellerPhoneDigits}`
            : "tel:+18174150311";

          return (
          <div key={item.id} className="bg-white border border-[#E5E5E5] rounded-md overflow-hidden flex flex-col">
            <div className="relative w-full h-[220px]">
              {item.featured && (
                <span className="absolute top-2 left-2 text-xs bg-[#0F172A] text-white py-1 px-2 rounded">Featured Listing</span>
              )}
              <ImageCarousel images={item.images} alt={item.title} heightClass="h-[220px]" />
            </div>
            <div className="p-4 flex flex-col h-full">
              <p className="text-xs uppercase tracking-wide text-[#777]">{item.category}</p>
              <p className="roboto-slab font-semibold text-lg mt-1">{item.title}</p>
              <div className="mt-3 text-sm flex-1">
                {item.monthly && (
                  <div className="mb-2">
                    <span className="text-[#555]">Monthly:</span>
                    <span className="ml-2 font-medium">{item.monthly}</span>
                  </div>
                )}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#555]">Hours</span>
                    <span className="font-medium">{item.specs?.hours?.toLocaleString?.() ?? item.hours?.toLocaleString?.() ?? "—"}</span>
                  </div>
                  {item.specs?.serialNumber && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#555]">Serial Number</span>
                      <span className="font-medium">{item.specs.serialNumber}</span>
                    </div>
                  )}
                  {item.categorySpecific?.["Boom Length"] && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#555]">Boom Length</span>
                      <span className="font-medium">{item.categorySpecific["Boom Length"]}</span>
                    </div>
                  )}
                  {item.interior?.["A/C"] && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#555]">A/C</span>
                      <span className="font-medium">{item.interior["A/C"]}</span>
                    </div>
                  )}
                  {item.interior?.Heater && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#555]">Heater</span>
                      <span className="font-medium">{item.interior.Heater}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-[#555]">Location</span>
                    <span className="font-medium">{item.location}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setModal({ phoneText: sellerPhoneText, phoneHref: sellerPhoneHref })}
                  className="font-semibold underline"
                >
                  {item.priceText}
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => push(`/current-inventory/${item.id}`)}
                    className="text-sm rounded-full text-white bg-[#5C9544] py-[8px] px-[16px]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        );})}

        {modal && (
          <ConfirmCallModal
            open={!!modal}
            phoneText={modal.phoneText}
            onClose={() => setModal(null)}
            onConfirm={() => {
              const href = modal.phoneHref;
              setModal(null);
              if (href) window.location.href = href;
            }}
          />
        )}
      </div>

      <div className="md:hidden flex justify-center mt-8">
        <button
          onClick={() => push("/contact-us")}
          className="rounded-full text-white bg-[#5C9544] py-[10px] px-[28px]"
        >
          Request a quote
        </button>
      </div>
    </div>
  );
}


