"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Socials from "../Socials";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const navMenu = [
   { id: 1, title: "home", url: "/" },
   { id: 2, title: "about", url: "/about" },
   { id: 3, title: "our factory", url: "/our-factory" },
   { id: 4, title: "contact", url: "/contact" },
];

export default function Navbar() {
   const [menu] = useState(false);
   return (
      <header className="border-b border-neutral-200/70 z-50 bg-white fixed top-0 w-full">
         <div className="bg-[#a4e9d5] py-1 justify-center items-center ">
            <Carousel
               plugins={[Autoplay({ delay: 3000 })]}
               opts={{ loop: true }}
               className=" left-1/2 -translate-x-1/2 w-fit"
            >
               <CarouselContent>
                  <CarouselItem className="text-center">Welcome to our store</CarouselItem>
                  <CarouselItem className="text-center">Made in Ghana, Trusted Worldwide</CarouselItem>
               </CarouselContent>
            </Carousel>
            <p className="text-center capitalize text-sm"> </p>
         </div>
         <nav className="mx-auto flex max-w-7xl items-center justify-between h-14">
            <div className="flex gap-3">
               {navMenu.map((link) => (
                  <Link key={link.id} href={link.url} className="uppercase hover:text-red-600 font-semibold">
                     {link.title}
                  </Link>
               ))}
            </div>

            <Image
               src={"/logo.png"}
               alt="logo"
               width={300}
               height={300}
               className="object-contain mx-auto absolute left-1/2 -translate-x-1/2 "
            />
            <Socials />
            <div className="flex lg:hidden">
               <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
                  <Menu />
               </button>
               {menu && <div className="">mobile menu</div>}
            </div>
         </nav>
      </header>
   );
}
