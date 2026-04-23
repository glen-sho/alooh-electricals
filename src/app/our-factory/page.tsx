import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function OurFactory() {
   return (
      <div>
         <div className="h-[60vh] relative bg-[url(/factory.webp)] bg-cover bg-no-repeat parallex">
            <h1 className="text-8xl text-white absolute -bottom-5 uppercase font-bold">Factory</h1>
         </div>

         <div className="max-w-7xl mx-auto pt-14 pb-20">
            <div className="grid grid-cols-[1fr_2fr] items-center">
               <div className="relative h-86 w-86">
                  <Image src={"/flag.jpg"} alt="logo" fill />
                  <p className="text-4xl font-semibold absolute bottom-0 left-1/2 w-full text-white bg-black">
                     Made in Ghana <br /> Trusted Worldwide
                  </p>
               </div>
               <div className="text-2xl font-medium">
                  {` Our products are a testament to Ghana’s potential and New Orient’s unwavering commitment to quality.
                  We take pride in the trust our customers place in us, not only in Ghana but also around the world. Our
                  “Made in Ghana” products are a symbol of excellence and reliability.`}
               </div>
            </div>
         </div>
         <div className="bg-black">
            <div className="max-w-7xl mx-auto py-20 space-y-12">
               <div className="text-neutral-300 space-y-4">
                  <h1 className="text-5xl font-bold">Bridging the Gap</h1>
                  <p className="text-2xl">
                     {` New Orient is the bridge that brings manufacturing of electrical goods to Ghana. We are committed
                     to pioneering change, setting industry standards, and providing a platform for the growth of
                     Ghana’s manufacturing sector. We believe in Ghana’s potential, and we’re here to turn that
                     potential into reality`}
                     .
                  </p>
               </div>
               <div className="text-neutral-300 space-y-4">
                  <h1 className="text-5xl font-bold">Join us on the Journey</h1>
                  <p className="text-2xl">
                     {` We invite you to be part of our story, a story of growth, innovation, and community. Whether you’re
                     a customer, a partner, or a member of the industry, New Orient welcomes you to explore our world of
                     electrical excellence. Together, we’ll shape a brighter future for Ghana’s electrical industry.`}
                  </p>
               </div>

               <div className="flex items-center gap-6">
                  <p className="text-neutral-300 text-2xl">
                     {` At New Orient, it's not just business; it's a legacy in the making`}
                  </p>

                  <Link
                     href="/contact"
                     className="bg-white font-semibold p-2 rounded-sm text-2xl px-4 hover:bg-neutral-200 cursor-pointer"
                  >
                     Contact today
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
