"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "../Sidebar/Index";
import ActionButton, { PHONE } from "../ActionButtons";

export const navLinks = [
   { name: "Home", href: "/" },
   { name: "Products", href: "/products" },
   { name: "Our Factory", href: "/our-factory" },
   { name: "About", href: "/about" },
   { name: "Contact", href: "/contact" },
];

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
   const pathname = usePathname();

   return (
      <header className="w-full sticky top-0 z-50">
         <div className="py-1.5 px-4 bg-sky-700/55 backdrop-blur-sm h-13 flex w-full justify-center items-center">
            <Carousel plugins={[Autoplay({ delay: 3000 })]} opts={{ loop: true }} className="top-1">
               <CarouselContent className="text-center flex items-center">
                  <CarouselItem className="leading-px">
                     <strong className="uppercase text-sm text-black leading-3">
                        &#9889; Built on 40 years. Building Ghana&apos;s future. <br />
                     </strong>
                     <p className="text-white uppercase text-sm">Call or whatsapp: {PHONE}</p>
                  </CarouselItem>
                  <CarouselItem className="text-center">Welcome to our store</CarouselItem>
                  <CarouselItem className="text-center uppercase">Made in Ghana, Trusted Worldwide</CarouselItem>
               </CarouselContent>
            </Carousel>
         </div>

         <nav className="bg-white border-b border-gray-100 px-4 md:px-8 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
               <div className="hidden lg:flex items-center gap-3 flex-1">
                  {navLinks.map((link) => (
                     <Link
                        key={link.name}
                        href={link.href}
                        className={`uppercase hover:text-black whitespace-nowrap duration-300 ${pathname === link.href ? "text-black font-bold" : ""}`}
                     >
                        {link.name}
                     </Link>
                  ))}
               </div>

               <button
                  className="lg:hidden p-1.5 text-gray-600"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Open menu"
               >
                  <Menu size={22} />
               </button>
               <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

               <Link href={"/"} className="mx-auto absolute left-1/2 -translate-x-1/2 w-48 h-6 lg:w-80 lg:h-8">
                  <Image
                     src={"/logo.png"}
                     alt="logo"
                     priority
                     fill
                     sizes="(max-width: 1024px) 192px, 320px"
                     className="relative object-contain"
                  />
               </Link>

               <div className="hidden md:block">
                  <ActionButton />
               </div>
            </div>
         </nav>
      </header>
   );
}
