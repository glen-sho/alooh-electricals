import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ReactElement } from "react";

interface SocialItem {
   id: number;
   link: string;
   icon: ReactElement;
}

export const socials: SocialItem[] = [
   { id: 1, link: "/", icon: <FaFacebookF size={17} /> },
   { id: 2, link: "/", icon: <FaXTwitter size={20} strokeWidth={10} /> },
   { id: 3, link: "/", icon: <FaInstagram size={20} strokeWidth={10} /> },
   { id: 4, link: "/", icon: <FaWhatsapp size={20} strokeWidth={10} /> },
];
