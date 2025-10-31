"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
const SHADOW = { filter: "drop-shadow(0px 0px 10px white)" };

export default ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      <div
        className={`w-full px-[20px] lg:px-[100px] py-[20px] flex justify-between items-center  ${
          pathname === "/" ? "absolute" : "bg-[#D6D6D6]"
        } z-10 nav-bar`}
      >
        <div>
          <Link href="/" prefetch={true}>
            <img style={SHADOW} className="hidden cursor-pointer lg:block" src="/logo.svg" alt="Logo" />
          </Link>
          <Link href="/" prefetch={true}>
            <img style={SHADOW} className="lg:hidden cursor-pointer" src="/logo-mv.svg" alt="Logo" />
          </Link>
        </div>
        <div>
          <Link
            href="/contact-us"
            prefetch={true}
            className={`py-[8px] px-[20px] text-sm lg:py-[14px] lg:px-[50px] inline-block ${
              pathname !== "/" ? "bg-[#5C9544] text-white" : "bg-white"
            } rounded-full lg:text-xl capitalize`}
          >
            Request a quote
          </Link>
        </div>
      </div>
      {children}
      <div className="hidden md:flex items-center gap-8 lg:gap-20 p-8 lg:p-24">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0">
          <div>
            <Link href="/" prefetch={true}>
              <img className="cursor-pointer" src="/logo-footer.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden xl:block">
            <img src="/footer-image.png" />
          </div>
          <div className="lg:pr-8 xl:pr-28 text-center lg:text-left">
            <div className="mb-6 flex gap-5 items-center justify-center lg:justify-start">
              <Link href="/water-truck" prefetch={true} className="capitalize hover:underline text-sm lg:text-base cursor-pointer">
                Water truck
              </Link>
              <Link href="/current-inventory" prefetch={true} className="capitalize hover:underline text-sm lg:text-base cursor-pointer">
                Inventory
              </Link>
            </div>
            <a href="https://maps.app.goo.gl/ahQMjFPMQakkjWot5?g_st=ac" className="text-sm lg:text-base">
              <span className="font-semibold">Office Address:</span>
              <br />
              16915 Walden Rd. Suite 310
              <br />
              Montgomery, TX 77356
            </a>
            <div className="mt-5 text-sm lg:text-base">
              <span className="font-semibold">Email:</span>
              <br />
              <a href="mailto:shamus@osheaequipment.com">
                shamus@osheaequipment.com
              </a>
            </div>
            <div className="mt-5 text-sm lg:text-base">
              <span className="font-semibold">Phone:</span>
              <br />
              <a href="tel:+18174221393">+1-817-422-1393</a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden pb-12 mt-12 px-4 sm:px-5">
        <div className="flex justify-center sm:justify-start">
          <Link href="/" prefetch={true}>
            <img className="cursor-pointer max-w-[120px] sm:max-w-none" src="/logo-footer.png" alt="Logo" />
          </Link>
        </div>
        <div className="mt-6 sm:mt-8">
          <div className="flex gap-4 sm:gap-5 mb-6 items-center justify-center sm:justify-start">
            <Link href="/water-truck" prefetch={true} className="capitalize hover:underline text-sm sm:text-base cursor-pointer">Water truck</Link>
            <Link href="/current-inventory" prefetch={true} className="capitalize hover:underline text-sm sm:text-base cursor-pointer">Inventory</Link>
          </div>
          <a href="https://maps.app.goo.gl/ahQMjFPMQakkjWot5?g_st=ac" className="text-sm sm:text-base block">
            <span className="font-semibold">Office Address:</span>
            <br />
            16915 Walden Rd. Suite 310
            <br />
            Montgomery, TX 77356
          </a>
          <div className="mt-4 sm:mt-5 text-sm sm:text-base">
            <span className="font-semibold">Email:</span>
            <br />
            <a href="mailto:shamus@osheaequipment.com">
              shamus@osheaequipment.com
            </a>
          </div>
          <div className="mt-4 sm:mt-5 text-sm sm:text-base">
            <span className="font-semibold">Phone:</span>
            <br />
            <a href="tel:+18174221393">+1-817-422-1393</a>
          </div>
        </div>
      </div>
    </div>
  );
};
