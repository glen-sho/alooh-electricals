"use client";

import Image from "next/image";
import { navMenu } from "../Navbar";
import Link from "next/link";
import Socials from "../Socials";

export default function Footer() {
  return (
    <div className="bg-mauve-900 py-3 lg:pt-24 ">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="grid grid-cols-2 items-start gap-4">
          <div className="space-y-6">
            <Image
              src={"/logo-white.png"}
              alt="logo"
              width={250}
              height={250}
              className="object-contain"
            />
            <form action="" className="flex flex-col gap-4 w-2/3">
              <p className="text-white">
                Subscribe to Alooh Electricals newsletters
              </p>
              <input
                type="text"
                placeholder="email address"
                className="border border-mauve-700 rounded-lg p-2 placeholder:text-neutral-500 text-white focus:bg-mauve-800"
              />
              <input
                type="submit"
                className="bg-white p-2 rounded-lg font-semibold hover:bg-neutral-200 cursor-pointer"
              />
            </form>
          </div>
          <div className="grid grid-cols-2">
            <div className="">
              <h1 className="font-bold text-white uppercase">Menu</h1>
              {navMenu.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className="capitalize text-mauve-400 hover:text-mauve-300 text-md block"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="text-mauve-400 text-xl space-y-4">
              <div className="">
                <div className="">
                  <span>Telephone: </span>
                  <span className="text-white font-semibold">
                    {" "}
                    +233 24 408 1474
                  </span>
                </div>
                <div className="">
                  <span>Landline: </span>
                  <span className="text-white font-semibold">
                    +233 30 338 9976
                  </span>
                </div>
              </div>
              <Socials />
            </div>
          </div>
        </div>
        <div className=" border-t border-mauve-800 py-4">
          <p className="text-mauve-500">
            © 2026 Alooh Electricals. All rights reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
