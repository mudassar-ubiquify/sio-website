"use client";

import { useRouter } from "next/navigation";

// Lightweight example dataset. Replace or feed from your source.
const items = [
  {
    id: "cat-307e2-2016",
    title: "2016 CATERPILLAR 307E2",
    category: "Crawler Excavators",
    location: "Houston, Texas",
    hours: 737,
    priceText: "CALL FOR PRICE",
    image: "/bulldozerImg.png",
  },
  {
    id: "cat-312e-2014",
    title: "2014 CATERPILLAR 312E",
    category: "Crawler Excavators",
    location: "Houston, Texas",
    hours: 1361,
    priceText: "CALL FOR PRICE",
    image: "/soi-img.png",
  },
  {
    id: "cat-330-2022",
    title: "2022 CATERPILLAR 330",
    category: "Crawler Excavators",
    location: "Houston, Texas",
    hours: 1043,
    priceText: "CALL FOR PRICE",
    image: "/sec-4.png",
  },
];

export default function InventoryPage() {
  const { push } = useRouter();

  return (
    <div className="px-[20px] lg:px-[100px] pt-[120px] pb-16">
      <div className="flex items-center justify-between">
        <div>
          <p className="roboto-slab font-bold text-[32px] lg:text-[42px]">Inventory</p>
          <p className="text-sm lg:text-base text-[#444]">Browse available equipment and contact us for pricing and availability.</p>
        </div>
        <div className="hidden md:block">
          <button
            onClick={() => push("/contact-us")}
            className="rounded-full text-white bg-[#5C9544] py-[10px] px-[28px] lg:py-[14px] lg:px-[50px]"
          >
            Request a quote
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {items.map((item) => (
          <div key={item.id} className="bg-white border border-[#E5E5E5] rounded-md overflow-hidden">
            <div className="relative w-full h-[220px] bg-[#F5F5F5]">
              {/* Image wrapper keeps consistent card height */}
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-xs uppercase tracking-wide text-[#777]">{item.category}</p>
              <p className="roboto-slab font-semibold text-lg mt-1">{item.title}</p>
              <div className="mt-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#555]">Hours</span>
                  <span className="font-medium">{item.hours?.toLocaleString?.() ?? "—"}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[#555]">Location</span>
                  <span className="font-medium">{item.location}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold">{item.priceText}</span>
                <button
                  onClick={() => push("/contact-us")}
                  className="text-sm rounded-full text-white bg-[#5C9544] py-[8px] px-[16px]"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
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


