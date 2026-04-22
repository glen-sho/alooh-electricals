"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const navMenu = [
   { id: 1, title: "home", url: "/home" },
   { id: 2, title: "about", url: "/about" },
   { id: 3, title: "our factory", url: "/our-factory" },
   { id: 4, title: "contact", url: "/contact" },
];

const socials = [
   { id: 1, link: "/", icon: <FaFacebookF size={17} /> },
   { id: 2, link: "/", icon: <FaXTwitter size={20} strokeWidth={10} /> },
   { id: 3, link: "/", icon: <FaInstagram size={20} strokeWidth={10} /> },
   { id: 4, link: "/", icon: <FaWhatsapp size={20} strokeWidth={10} /> },
];

export default function Navbar() {
   const [menu, setMenu] = useState(false);
   return (
      <header className="shadow-sm z-50 bg-white fixed top-0 w-full">
         <div className="bg-[#a4e9d5] py-1 justify-center items-center ">
            <p className="text-center capitalize text-sm"> welcome to our store</p>
         </div>
         <nav className="mx-auto flex max-w-7xl items-center justify-between h-14 p-4">
            <div className="flex gap-3">
               {navMenu.map((link) => (
                  <Link key={link.id} href={link.url} className="uppercase hover:text-red-600">
                     {link.title}
                  </Link>
               ))}
            </div>
            <Image
               src={"/new-orient-logo.png"}
               alt="logo"
               width={150}
               height={150}
               className="object-contain mx-auto absolute left-1/2 -translate-x-1/2 "
            />
            <div className="flex gap-3 items-center">
               {socials.map((icon) => (
                  <div key={icon.id} className="">
                     {icon.icon}
                  </div>
               ))}
            </div>
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
