"use client";

import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { navMenu } from "../Navbar";
import Socials from "../Socials";

interface SidebarProps {
   isOpen: boolean;
   onClose: () => void;
}

function subscribe() {
   return () => {};
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
   const mounted = useSyncExternalStore(subscribe, () => true, () => false);

   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "";
      }
      return () => {
         document.body.style.overflow = "";
      };
   }, [isOpen]);

   if (!mounted) return null;

   return createPortal(
      <>
         <div
            onClick={onClose}
            className={`fixed inset-0 z-9998 bg-black/40 transition-opacity duration-300 ${
               isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
         />

         <aside
            className={`fixed top-0 left-0 z-9999 h-full w-72 bg-white shadow-xl flex flex-col transition-transform duration-300 ${
               isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
         >
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
               <div className="relative w-36 h-6">
                  <Image src="/logo.png" alt="logo" fill sizes="144px" className="object-contain" priority />
               </div>
               <button onClick={onClose} aria-label="Close menu">
                  <X size={24} />
               </button>
            </div>

            <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
               {navMenu.map((link) => (
                  <Link
                     key={link.id}
                     href={link.url}
                     onClick={onClose}
                     className="uppercase font-semibold text-sm tracking-wide py-3 px-3 rounded-md hover:bg-[#a4e9d5]/30 transition-colors"
                  >
                     {link.title}
                  </Link>
               ))}
            </nav>

            <div className="px-5 pb-8 border-t border-neutral-200 pt-4">
               <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Follow us</p>
               <Socials />
            </div>
         </aside>
      </>,
      document.body,
   );
}
