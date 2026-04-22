"use client";

import React from "react";
import Image from "next/image";
import { socials } from "../../lib/constants";
import { navMenu } from "../Navbar";
import Link from "next/link";

export default function Footer() {
   return (
      <div className="bg-mauve-900 py-3 lg:pt-24">
         <div className="max-w-7xl mx-auto space-y-14">
            <div className="grid grid-cols-2 items-start gap-4">
               <div className="space-y-6">
                  <Image src={"/new-orient-logo.png"} alt="logo" width={120} height={120} className="object-contain" />
                  <form action="" className="flex flex-col gap-4 w-2/3">
                     <p className="text-white">Subscribe to Light Trybe newsletters</p>
                     <input
                        type="text"
                        placeholder="email address"
                        className="border border-mauve-700 rounded-lg p-2 placeholder:text-neutral-500 text-white"
                     />
                     <input type="submit" className="bg-white p-1 rounded-lg" />
                  </form>
               </div>
               <div className="grid grid-cols-2">
                  <div className="">
                     <h1 className="font-bold text-white uppercase">Menu</h1>
                     {navMenu.map((link) => (
                        <Link
                           key={link.id}
                           href={link.url}
                           className="capitalize text-mauve-400 hover:text-mauve-400 text-md block"
                        >
                           {link.title}
                        </Link>
                     ))}
                  </div>
                  <div className="text-mauve-400 text-xl space-y-4">
                     <div className="">
                        <p>Call: 09161848660</p>
                        <p> WhatsApp: +234 705 877 9328</p>
                     </div>
                     <div className="flex gap-3 items-center py-4">
                        {socials.map((icon) => (
                           <div key={icon.id} className="text-white">
                              {icon.icon}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
            <div className=" border-t border-mauve-800 py-4">
               <p className="text-mauve-400">© 2026 Alooh electricals. All rights reserved </p>
            </div>
         </div>
      </div>
   );
}
