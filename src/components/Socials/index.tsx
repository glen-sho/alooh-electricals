import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ReactElement } from "react";

interface SocialItem {
   id: number;
   link: string;
   icon: ReactElement;
}

export const socials: SocialItem[] = [
   { id: 1, link: "http://facebook.com", icon: <FaFacebookF size={17} /> },
   { id: 2, link: "http://x.com", icon: <FaXTwitter size={20} strokeWidth={10} /> },
   { id: 3, link: "http://instagram.com", icon: <FaInstagram size={20} strokeWidth={10} /> },
   { id: 4, link: "https://wa.me/+2347052067970", icon: <FaWhatsapp size={20} strokeWidth={10} /> },
];

export default function Socials({ color = "black" }: { color?: string }) {
   return (
      <div className="flex gap-3 items-center py-4 ">
         {socials.map((icon) => (
            <a href={icon.link} key={icon.id} className={`text-${color} hover:text-neutral-500 duration-300`}>
               {icon.icon}
            </a>
         ))}
      </div>
   );
}
