"use client";
import { usePathname, useRouter } from "next/navigation";
const SHADOW = { filter: "drop-shadow(0px 0px 10px white)" };

export default ({ children }) => {
  const pathname = usePathname();
  const { push } = useRouter();
  return (
    <div>
      <div
        className={`w-full px-[20px] lg:px-[100px] py-[20px] flex justify-between items-center  ${
          pathname === "/" ? "absolute" : "bg-[#D6D6D6]"
        } z-10 nav-bar`}
      >
        <div>
          <img onClick={() => push("/")} style={SHADOW} className="hidden cursor-pointer lg:block" src="/logo.svg" />
          <img onClick={() => push("/")} style={SHADOW} className="lg:hidden cursor-pointer" src="/logo-mv.svg" />
        </div>
        <div>
          <button
            onClick={() => push("/contact-us")}
            className={`py-[8px] px-[20px] text-sm lg:py-[14px] lg:px-[50px] ${
              pathname !== "/" ? "bg-[#5C9544] text-white" : "bg-white"  
            } rounded-full lg:text-xl capitalize`}
          >
            Request a quote
          </button>
        </div>
      </div>
      {children}
      <div className="hidden md:flex items-center gap-20 p-24">
        <div className="w-full flex justify-between">
          <div>
            <img className="cursor-pointer" onClick={() => push("/")} src="/logo-footer.png" />
          </div>
          <div className="hidden lg:block">
            <img src="/footer-image.png" />
          </div>
          <div className="pr-28">
            <div className="mb-6 flex gap-5 items-center">
              <span onClick={() => push("/water-truck")} className="cursor-pointer capitalize hover:underline">Water truck</span>
              <span onClick={() => push("/inventory")} className="cursor-pointer capitalize hover:underline">Inventory</span>
            </div>
            <a href="https://maps.app.goo.gl/ahQMjFPMQakkjWot5?g_st=ac">
              <span className="font-semibold">Office Address:</span>
              <br />
              16915 Walden Rd. Suite 310
              <br />
              Montgomery, TX 77356
            </a>
            <div className="mt-5">
              <span className="font-semibold">Email:</span>
              <br />
              <a href="mailto:shamus@osheaequipment.com">
                shamus@osheaequipment.com
              </a>
            </div>
            <div className="mt-5">
              <span className="font-semibold">Phone:</span>
              <br />
              <a href="tel:+18174221393">+1-817-422-1393</a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden pb-20 mt-20 px-5">
        <div>
          <img className="cursor-pointer" onClick={() => push("/")} src="/logo-footer.png"></img>
        </div>
        <div className="mt-8">
          <div className="flex gap-5 mb-6 items-center">
            <span onClick={() => push("/water-truck")} className="cursor-pointer capitalize hover:underline">Water truck</span>
            <span onClick={() => push("/inventory")} className="cursor-pointer capitalize hover:underline">Inventory</span>
          </div>
          <a href="https://maps.app.goo.gl/ahQMjFPMQakkjWot5?g_st=ac">
            <span className="font-semibold">Office Address:</span>
            <br />
            16915 Walden Rd. Suite 310
            <br />
            Montgomery, TX 77356
          </a>
          <div className="mt-5">
            <span className="font-semibold">Email:</span>
            <br />
            <a href="mailto:shamus@osheaequipment.com">
              shamus@osheaequipment.com
            </a>
          </div>
          <div className="mt-5">
            <span className="font-semibold">Phone:</span>
            <br />
            <a href="tel:+18174221393">+1-817-422-1393</a>
          </div>
        </div>
      </div>
    </div>
  );
};
