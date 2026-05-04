import { products } from "@/data/products";
import React from "react";

export default function HeroCard() {
   const heroCards = {
      id: "6c97057d-fc8c-48dd-abd4-563f44519f80",
      name: "NEWORIENT STANDING FAN",
      images: ["neworient-standing-fan.png"],
      description:
         "Professional Neworient standing fan, 5-blade high-velocity design with 4-speed push-button control. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
   };
   return (
      <div>
         <div className=" relative">
            <img src={heroCards.images[0]} alt={"heroImage"} className="w-full h-full object-contain bg-mist-100" />
            <div className="absolute top-0 flex flex-col gap-3 h-full justify-between">
               <div className="left-5 relative flex flex-col">
                  <img src={"/flag.png"} alt={"flag"} className="w-20 h-20 object-contain" />
                  <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-[3px] w-fit text-white bg-purple-700">
                     MADE IN GHANA
                  </span>
               </div>
               <div className="bg-mist-300 p-2 bottom-20 relative text-black">
                  <p className=" text-lg font-bold mt-1 leading-tight">{heroCards.name}</p>
                  <p className="mt-0.5"> Manufactured at our Tema factory</p>
               </div>
            </div>
         </div>
         <p className="text-center text-md text-gray-500 mt-1">
            No prices displayed &middot; WhatsApp or email to enquire
         </p>
      </div>
   );
}
