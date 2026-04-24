"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Socials from "../Socials";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Sidebar from "../Sidebar/Index";

export const navMenu = [
   { id: 1, title: "home", url: "/" },
   { id: 2, title: "about", url: "/about" },
   { id: 3, title: "our factory", url: "/our-factory" },
   { id: 4, title: "contact", url: "/contact" },
];

export default function Navbar() {
   const [sidemenu, setSidemenu] = useState(false);
   const pathname = usePathname();
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
         <nav className="mx-auto flex max-w-7xl items-center justify-between h-14 px-4">
            <div className="flex lg:hidden z-50">
               <button onClick={() => setSidemenu(true)} aria-label="Open menu">
                  <Menu color="black" size={28} />
               </button>
            </div>
            <Sidebar isOpen={sidemenu} onClose={() => setSidemenu(false)} />
            <div className="hidden lg:flex gap-3">
               {navMenu.map((link) => (
                  <Link
                     key={link.id}
                     href={link.url}
                     className={`uppercase hover:text-black duration-300 ${pathname === link.url ? "font-bold text-black" : "font-semibold"}`}
                  >
                     {link.title}
                  </Link>
               ))}
            </div>
            <div className="mx-auto absolute left-1/2 -translate-x-1/2 w-48 h-6 lg:w-60 lg:h-8">
               <Image
                  src={"/logo.png"}
                  alt="logo"
                  priority
                  fill
                  sizes="(max-width: 1024px) 192px, 320px"
                  className="relative object-contain"
               />
            </div>
            <div className="hidden lg:flex gap-3">
               <Socials />
            </div>
         </nav>
      </header>
   );
}
