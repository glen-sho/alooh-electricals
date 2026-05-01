"use client";
import React from "react";
import { Zap, ArrowRight } from "lucide-react";
import Stats from "../Stats";
import Link from "next/link";
import Image from "next/image";

const heroCards = [
   {
      badge: "NEW ARRIVAL",
      badgeBg: "#2563eb",
      name: "New Orient 3-Gang Switch",
      desc: "Quality-checked, ready to install",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop",
   },
   {
      badge: "TOP RATED",
      badgeBg: "#7c3aed",
      name: "LED Panel Surface Lights",
      desc: "Energy efficient, long-life LED",
      img: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=400&auto=format&fit=crop",
   },
   {
      badge: "MADE IN GHANA",
      badgeBg: "#16a34a",
      name: "3x3 Conduit Box",
      desc: "Manufactured at our Tema factory",
      img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=400&auto=format&fit=crop",
   },
];

export default function Hero() {
   return (
      <div>
         <section className="h-[90vh] flex justify-center items-center bg-background">
            {/* <div className="absolute bg-[url(/landing1.webp)] bg-cover bg-no-repeat left-0 top-0 w-full h-full z-10"></div> */}
            {/* <div className="absolute  bg-black left-0 top-0 w-full h-full z-10 opacity-80 mix-"></div> */}
            <div className="max-w-7xl mx-auto px-4 md:px-0 z-20">
               <div className="grid lg:grid-cols-2 gap-14 items-center ">
                  {/* Left copy */}
                  <div className="space-y-7">
                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-primary border">
                        <Zap size={12} className="text-primary" />
                        <span className="text-xs font-medium text-primary">Over 40 Years of Electrical Excellence</span>
                     </div>

                     <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight font-Quattrocento_Sans">
                        Ghana&apos;s Leading Electrical Supplier &amp; Manufacturer{" "}
                        <span className="text-primary">Now Building Locally Too</span>
                     </h1>

                     <p className="text-xs font-medium italic text-white">
                        Built on 40 Years. Building Ghana&apos;s Future.
                     </p>

                     <div className="flex flex-wrap gap-3">
                        <Link
                           href="/products"
                           className="flex items-center gap-2 text-white px-7 py-3.5 rounded-[7px] text-sm font-medium hover:opacity-90 transition-opacity bg-primary"
                        >
                           Browse Our Products <ArrowRight size={15} />
                        </Link>
                        <Link
                           href="/factory"
                           className="flex items-center gap-2 px-7 py-3.5 rounded-[7px] text-sm font-medium border border-primary text-primary"
                        >
                           See Our Factory &rarr;
                        </Link>
                     </div>

                     {/* Stats row */}
                     <Stats />
                  </div>

                  {/* Right — stacked mini product cards */}
                  <div className="flex flex-col gap-3">
                     {heroCards.map((item) => (
                        <div
                           key={item.name}
                           className="flex items-center gap-4 p-3 rounded-[8px]"
                           style={{
                              backgroundColor: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.07)",
                           }}
                        >
                           <div className="w-14 h-14 rounded-md overflow-hidden bg-gray-800 shrink-0">
                              {/* <Image
                                 src={item.img}
                                 alt={item.name}
                                 width={200}
                                 height={200}
                                 className="w-full h-full object-cover"
                              /> */}
                           </div>
                           <div className="flex-1 min-w-0">
                              <span
                                 className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-[3px] text-white"
                                 style={{ backgroundColor: item.badgeBg }}
                              >
                                 {item.badge}
                              </span>
                              <p className="text-white text-md font-medium mt-1 leading-tight">{item.name}</p>
                              <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                     <p className="text-center text-md text-gray-400 mt-1">
                        No prices displayed &middot; WhatsApp or email to enquire
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
