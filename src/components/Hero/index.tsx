"use client";
import React from "react";
import { Zap, ArrowRight } from "lucide-react";
import Stats from "../Stats";
import Link from "next/link";
import HeroCard from "./HeroCard";

export default function Hero() {
   return (
      <div>
         <section className="h-[86vh] flex justify-center items-center bg-stone-100">
            <div className="max-w-7xl mx-auto px-4 md:px-0 z-20">
               <div className="grid lg:grid-cols-2 gap-14 items-center ">
                  <div className="space-y-7">
                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-primary border">
                        <Zap size={12} className="text-primary" />
                        <span className="text-xs font-medium text-primary">Over 40 Years of Electrical Excellence</span>
                     </div>

                     <h1 className="text-3xl md:text-5xl font-bold leading-tight font-Quattrocento_Sans">
                        Ghana&apos;s Leading Electrical Supplier &amp; Manufacturer{" "}
                        <span className="text-primary">Now Building Locally Too</span>
                     </h1>

                     <p className="text-xs font-medium italic ">Built on 40 Years. Building Ghana&apos;s Future.</p>

                     <div className="flex flex-wrap gap-3">
                        <Link
                           href="/products"
                           className="flex items-center gap-2  px-7 py-3.5 rounded-[7px] text-sm font-medium hover:opacity-90 transition-opacity bg-primary text-white"
                        >
                           Browse Our Products <ArrowRight size={15} />
                        </Link>
                        <Link
                           href="/factory"
                           className="flex items-center gap-2 px-7 py-3.5 rounded-[7px] text-sm font-medium border border-primary text-primary hover:bg-neutral-100 duration-300"
                        >
                           See Our Factory &rarr;
                        </Link>
                     </div>
                     <div className="w-full bg-mist-300 h-px" />
                     <Stats />
                  </div>
                  <HeroCard />
               </div>
            </div>
         </section>
      </div>
   );
}
