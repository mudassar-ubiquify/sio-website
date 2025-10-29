"use client";

import { useRouter } from "next/navigation";
import WatermarkedImage from "@/components/WatermarkedImage";

export default function WaterTruckPage() {
  const { push } = useRouter();

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden">
        <video
          src="/waterTruckBanner.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-5">
          <div className="max-w-4xl text-white">
            <p className="roboto-slab font-bold text-[32px] md:text-[48px] lg:text-[64px] leading-tight">
              Oshkosh 6x6 Off‑Road Water Truck
            </p>
            <p className="mt-4 text-sm md:text-base lg:text-xl opacity-95">
              4,000 Gallon Capacity • Cab‑Controlled Spray System
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => push("/contact-us")}
                className="rounded-full text-white bg-[#5C9544] py-[10px] px-[28px] lg:py-[14px] lg:px-[50px]"
              >
                Request a quote
              </button>
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                className="rounded-full bg-white text-black py-[10px] px-[28px] lg:py-[14px] lg:px-[50px]"
              >
                Explore specs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="px-[20px] lg:px-[100px] py-12 lg:py-20">
        <div className="max-w-5xl">
          <p className="roboto-slab font-bold text-[28px] lg:text-[42px]">Built for the toughest job‑sites</p>
          <p className="mt-3 text-[#333] text-sm md:text-base lg:text-lg">
            The Oshkosh MK23 6x6 Water Truck delivers high‑capacity water transport with exceptional reliability,
            control and operator comfort. Whether it's dust suppression, soil compaction, fire mitigation, or remote
            access support, this machine is ready to perform.
          </p>
        </div>
      </div>

      {/* Auto-Play Video Section */}
      <div className="px-[20px] lg:px-[100px] pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
              <video
                src="/waterTruckVideo1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[300px] lg:h-[350px] object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
              <video
                src="/waterTruckVideo2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[300px] lg:h-[350px] object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-[20px] lg:px-[100px] pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="roboto-slab font-bold text-[22px] lg:text-[32px] text-[#5C9544] mb-8 text-center">
            In Action
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
              <WatermarkedImage
                src="/waterTruck1.jpg"
                alt="Oshkosh 6x6 Water Truck"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
              <WatermarkedImage
                src="/waterTruck2.jpg"
                alt="Oshkosh 6x6 Water Truck"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
              <WatermarkedImage
                src="/waterTruck3.jpg"
                alt="Oshkosh 6x6 Water Truck"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Group 2 */}
      <div className="px-[20px] lg:px-[100px] pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="roboto-slab font-bold text-[22px] lg:text-[32px] text-[#5C9544] mb-8 text-center">
            Fleet & Operational Views
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <div key={num} className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
                <WatermarkedImage
                  src={`/waterTruckGroup2-${num}.jpg`}
                  alt={`Oshkosh 6x6 Water Truck - Image ${num}`}
                  className="w-full h-[250px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery Group 3 */}
      <div className="px-[20px] lg:px-[100px] pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="roboto-slab font-bold text-[22px] lg:text-[32px] text-[#5C9544] mb-8 text-center">
            Exterior Profile
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 2 }, (_, i) => i + 1).map((num) => (
              <div key={num} className="rounded-lg overflow-hidden border border-[#E5E5E5] bg-white shadow-sm">
                <WatermarkedImage
                  src={`/waterTruckGroup3-${num}.jpg`}
                  alt={`Oshkosh 6x6 Water Truck - Group 3 Image ${num}`}
                  className="w-full h-[300px] lg:h-[350px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features & Specifications */}
      <div className="px-[20px] lg:px-[100px] pb-16">
        <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 lg:p-10">
          <p className="roboto-slab font-bold text-[22px] lg:text-[32px] text-[#5C9544]">
            Key Features & Specifications
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
            <div>
              <p className="font-semibold text-lg">Chassis & Powertrain</p>
              <ul className="mt-3 space-y-2 text-sm lg:text-base">
                <li className="flex justify-between border-b pb-2"><span>Model</span><span>Full‑Time 6x6 All‑Wheel Drive</span></li>
                <li className="flex justify-between border-b pb-2"><span>Engine</span><span>CAT C‑12 Diesel @ 410 HP</span></li>
                <li className="flex justify-between border-b pb-2"><span>Transmission</span><span>7‑Speed Allison Automatic</span></li>
                <li className="flex justify-between border-b pb-2"><span>Suspension</span><span>6‑Position Coil Over Spring</span></li>
                <li className="flex justify-between border-b pb-2"><span>Steering</span><span>Full Power Steering</span></li>
                <li className="flex justify-between border-b pb-2"><span>Tires</span><span>16.00R20 Michelin off‑road</span></li>
                <li className="flex justify-between border-b pb-2"><span>GVWR</span><span>62,000 lb</span></li>
                <li className="flex justify-between"><span>Axles</span><span>Front 16,000 • Middle 23,500 • Rear 25,500 lb</span></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-lg">Water System</p>
              <ul className="mt-3 space-y-2 text-sm lg:text-base">
                <li className="flex justify-between border-b pb-2"><span>Tank Capacity</span><span>4,000 gallons (epoxy‑coated)</span></li>
                <li className="flex justify-between border-b pb-2"><span>Pump</span><span>Berkley 4x3 / 750 GPM (hydraulic)</span></li>
                <li className="flex justify-between border-b pb-2"><span>Drive</span><span>Hot‑Shift PTO</span></li>
                <li className="flex justify-between border-b pb-2"><span>Spray System</span><span>5 cab‑controlled heads</span></li>
                <li className="flex justify-between border-b pb-2"><span>Rear Spray Bar</span><span>8 ft, cab‑controlled</span></li>
                <li className="flex justify-between border-b pb-2"><span>Suction Plumbing</span><span>Canal fill ready</span></li>
                <li className="flex justify-between"><span>Optional</span><span>Pre‑plumbed for cannon or 7th head</span></li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <p className="font-semibold text-lg">Operator & Safety Enhancements</p>
              <ul className="mt-3 space-y-2 text-sm lg:text-base">
                <li>Cab with AC, heat, and air‑ride driver’s seat</li>
                <li>On‑Road / Off‑Road Mode Selector</li>
                <li>Full LED night package, front & rear beacons</li>
                <li>Full air brakes with ABS</li>
                <li>Custom paint colors available</li>
                <li>Backup Camera & Fire Extinguisher</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-lg">Applications</p>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm lg:text-base">
                {[
                  "Dust Suppression",
                  "Civil Construction",
                  "Mining & Quarrying",
                  "Pipeline",
                  "Wildfire Support",
                  "Disaster Relief",
                ].map((item) => (
                  <div key={item} className="bg-[#F6F6F6] border border-[#EAEAEA] rounded-md px-3 py-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-[20px] lg:px-[100px] pb-24">
        <div className="bg-[#5C9544] rounded-2xl p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <p className="roboto-slab font-bold text-[24px] lg:text-[36px]">Ready to add capability to your fleet?</p>
            <p className="mt-2 opacity-90">Talk with our team about availability, pricing, and configurations.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => push("/contact-us")}
              className="rounded-full bg-white text-black py-[10px] px-[28px] lg:py-[14px] lg:px-[50px]"
            >
              Contact Us
            </button>
            <a
              href="tel:+18174221393"
              className="rounded-full border border-white text-white py-[10px] px-[28px] lg:py-[14px] lg:px-[50px]"
            >
              Call +1‑817‑422‑1393
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


