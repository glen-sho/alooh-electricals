import Image from "next/image";
import React from "react";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Socials from "../Socials";
import Newsletter from "../Newsletter";
import Link from "next/link";

const PHONE = "+233 24 408 1474";
const EMAIL = "glen@aloohelectricals.com";
const ADDRESS = "4870 Sparrow Close, Tema Industrial Area, Ghana";
const SLOGAN = "Built on 40 Years. Building Ghana\u2019s Future.";
const WA_GENERAL = `https://wa.me/233244081474?text=${encodeURIComponent("Hello Alooh Electricals, I'd like to make an enquiry.")}`;

export default function Footer() {
   return (
      <footer className="text-stone-300 bg-footer">
         <div className="max-w-7xl mx-auto mt-24 pb-4">
            <div className="grid grid-cols-[1fr_1.5fr] gap-10">
               <div className="space-y-5">
                  <div className="space-y-3">
                     <Image
                        src={"/logo-white.png"}
                        alt="logo"
                        priority
                        width={250}
                        height={250}
                        className="object-contain"
                     />
                     <p className="mt-1 font-bold">{SLOGAN}</p>
                  </div>
                  <p className="leading-relaxed">
                     Ghana&apos;s leading electrical goods supplier and manufacturer. Based in Tema Industrial Area
                     since the 1980s.
                  </p>
                  <Newsletter />
               </div>
               <div className="grid grid-cols-3">
                  <div>
                     <p className="font-bold uppercase tracking-widest mb-4">Explore</p>
                     <ul className="space-y-2.5">
                        {[
                           { label: "Home", href: "/" },
                           { label: "About", href: "/about" },
                           { label: "Our Factory", href: "/factory" },
                           { label: "All Products", href: "/products" },
                           { label: "Contact", href: "/contact" },
                        ].map((l) => (
                           <li key={l.label}>
                              <Link href={l.href} className="text-sm hover:text-white transition-colors">
                                 {l.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <p className="font-bold uppercase tracking-widest mb-4">Support</p>
                     <ul className="space-y-2.5">
                        {[
                           { label: "Get a Quote", href: `mailto:${EMAIL}` },
                           { label: "WhatsApp Us", href: WA_GENERAL, ext: true },
                           {
                              label: "Wholesale Enquiries",
                              href: `mailto:${EMAIL}?subject=${encodeURIComponent("Wholesale Enquiry")}`,
                           },
                           { label: "FAQ", href: "/contact" },
                        ].map((l) => (
                           <li key={l.label}>
                              <Link
                                 href={l.href}
                                 target={l.ext ? "_blank" : undefined}
                                 rel={l.ext ? "noopener noreferrer" : undefined}
                                 className="text-sm hover:text-white transition-colors"
                              >
                                 {l.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <p className="font-bold uppercase tracking-widest mb-4">Contact Us</p>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-2.5">
                           <MapPin size={13} className=" mt-0.5 shrink-0" />
                           <span className="text-sm leading-snug">{ADDRESS}</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                           <MessageCircle size={13} className=" shrink-0" />
                           <Link
                              href={WA_GENERAL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm hover:text-white transition-colors"
                           >
                              {PHONE}
                           </Link>
                        </li>
                        <li className="flex items-center gap-2.5">
                           <Mail size={13} className=" shrink-0" />
                           <Link
                              href={`mailto:${EMAIL}`}
                              className="text-sm hover:opacity-80 transition-opacity break-all"
                           >
                              {EMAIL}
                           </Link>
                        </li>
                        <li className="flex items-center gap-2.5">
                           <Clock size={13} className=" shrink-0" />
                           <span className="text-sm">Mon&ndash;Fri 8am&ndash;6pm</span>
                        </li>
                     </ul>
                     <Socials color="white" />
                  </div>
               </div>
            </div>

            <div
               className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-12 pt-6 text-sm"
               style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
               <p className="">&copy; 2026 Alooh Electricals. All rights reserved.</p>
               <p className="">Made in Ghana &#x1F1EC;&#x1F1ED;</p>
            </div>
         </div>
      </footer>
   );
}
