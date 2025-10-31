"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <div className="relative">
      <div className="relative w-full h-screen flex justify-center items-center banner">
        <video
          src="/bannerVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hidden lg:block w-full h-full absolute top-0 left-0 object-cover"
        />
        <video
          src="/bannerVideo-mv.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="lg:hidden w-full h-full absolute top-0 left-0 object-cover"
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>

        <div className="w-full px-4 sm:w-4/5 lg:w-3/5 z-10 text-white text-center">
          <p className="hidden lg:block font-bold roboto-slab text-[58px] xl:text-[72px]">
          Safety, Efficiency, Purpose Built
          </p>
          <p className="lg:hidden font-bold roboto-slab text-[28px] sm:text-[32px] md:text-[42px] leading-[1.2]">
          Safety,
            <br /> Efficiency,
            <br /> Purpose Built
          </p>
          <p className="text-base sm:text-[18px] md:text-[32px] xl:text-[40px] mt-4 leading-10">
            Amphibious Excavators built for the most demanding job sites
          </p>
          <button
            onClick={() => push("/contact-us")}
            className="py-[8px] px-[20px] text-sm lg:py-[14px] lg:px-[50px] lg:text-xl bg-transparent border border-white text-white mt-8 sm:mt-12 lg:mt-10 rounded-full capitalize"
          >
            Request a quote
          </button>
        </div>
        <div className="absolute w-full bottom-20 lg:bottom-8 flex justify-center">
          <img className="animate-bounce" src="/arrow.svg" />
        </div>
      </div>
      
      <div className="hidden xl:flex items-center justify-center py-20">
        <div className="flex items-center gap-20">
          <img src="/soi-img.png" className="w-[800px] h-[500px]" />
          <div>
            <img src="/digger.svg" />
            <p className="roboto-slab font-bold text-[42px] mt-4">
              Specialty Equipment Rentals.
            </p>
            <p className="mt-3 text-[16px] max-w-[500px]">
              A leader in reliable and cost- effective amphibious excavator and
              specialty equipment rentals, we offer both standard reach
              solutions and custom built long reach units. Our team of experts
              is dedicated to helping you find the right equipment to complete
              your project safely and efficiently.
            </p>
            <button
              onClick={() => push("/current-inventory")}
              className="rounded-full text-xl capitalize text-white mt-16 bg-[#5C9544] py-[14px] px-[50px]"
            >
              See Current Inventory
            </button>
          </div>
        </div>
      </div>
      <div className="xl:hidden items-center justify-center">
        <div className="my-10">
          <div className="px-5">
            <img src="/digger.svg" />
            <p
              style={{ lineHeight: "1.2" }}
              className="roboto-slab font-bold text-[28px] sm:text-[32px] md:text-[42px]"
            >
              Solution-Oriented Innovation
            </p>
            <p className="mt-3 text-sm sm:text-[14px]">
              As global leaders in reliable and cost-effective amphibious
              excavators and attachments, we provide both general solutions and
              custom-built units. Our team of experts will help you find the
              right products to get your project started.{" "}
            </p>
            <button
              onClick={() => push("/contact-us")}
              className="rounded-full capitalize text-white mt-16 bg-[#5C9544] py-[8px] px-[20px] text-sm"
            >
              Request a quote
            </button>
          </div>
          <div className="w-full mt-14">
            <img className="w-full" src="/soi-img-mv.png" />
          </div>
        </div>
      </div>
      {/* Water Trucks promo section */}
      <div className="px-[20px] lg:px-[100px] py-16 bg-[#F6F6F6]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="roboto-slab font-bold text-[32px] lg:text-[42px]">Water Trucks</p>
            <p className="mt-3 text-[#333] text-sm md:text-base lg:text-lg max-w-[600px]">
              Heavy-duty off-road water trucks engineered for dust suppression, soil compaction, and site support.
              Explore our Oshkosh 6x6 builds with cab‑controlled spray systems and high‑capacity tanks.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => push("/water-truck")}
                className="rounded-full text-white bg-[#5C9544] py-[10px] px-[28px] lg:py-[14px] lg:px-[50px]"
              >
                View Water Trucks
              </button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#E5E5E5] bg-[#F6F6F6]">
            <video
              src="/waterTruckBanner1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[260px] lg:h-[360px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative h-[420px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
        <img
          src="/sec-4.png"
          className="w-full h-full absolute top-0 left-0 object-cover"
        />
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-10 bg-white px-6 py-6 sm:px-8 sm:py-8 lg:px-[80px] lg:py-[50px] max-w-[90%] sm:max-w-[70%] lg:max-w-none">
          <p className="font-bold text-[28px] sm:text-[32px] lg:text-[42px] roboto-slab">
            Discover the Perfect
            <br /> Tools for Your Project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 lg:mt-10 text-base lg:text-[21px]">
            <button
              onClick={() => push("/current-inventory")}
              className="rounded-full text-base lg:text-xl capitalize text-white bg-[#5C9544] py-3 lg:py-[14px] px-6 lg:px-[50px]"
            >
              See Current Inventory
            </button>
            <a
              href="/contact-us"
              className="py-3 lg:py-[14px] px-6 lg:px-[50px] bg-transparent border border-black rounded-full capitalize inline-block text-center text-base lg:text-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
