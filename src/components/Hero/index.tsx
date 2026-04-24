"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";

const heroItems = [
   {
      id: 1,
      image: "/landing3.webp",
      title: "Bamboo zigzag pattern basket",
      subtitle: "interior",
   },
   { id: 2, image: "/landing1.webp", title: "contemporary pendent lighting", subtitle: "interior" },
   { id: 3, image: "/landing2.webp", title: "", subtitle: "" },
];
export default function Hero() {
   return (
      <Carousel plugins={[Autoplay({ delay: 10000 })]} opts={{ loop: true }}>
         <CarouselContent>
            {heroItems.map((item) => (
               <CarouselItem
                  key={item.id}
                  className={cn(`relative w-full flex justify-center items-center h-[80vh]! lg:h-[90vh]!`)}
               >
                  <Image
                     src={item.image}
                     alt="hero-silde-image"
                     priority
                     fill
                     sizes="100vw"
                     className="object-top object-cover"
                  />
                  <div className="absolute h-full w-full bg-black/30"></div>
                  <div className="absolute text-center mx-auto z-10 p-4">
                     <h1 className="text-4xl lg:text-6xl font-Linden_Hill font-bold text-white capitalize">
                        {item.title}
                     </h1>
                     <p className="text-2xl text-white">{item.subtitle}</p>
                  </div>
               </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious className="left-2 lg:left-20" />
         <CarouselNext className="right-2 lg:right-20" />
      </Carousel>
   );
}
