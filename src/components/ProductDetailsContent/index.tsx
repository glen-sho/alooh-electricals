"use client";

import { useState } from "react";
import { toSlug } from "@/lib/utils";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel";
import RelatedProducts from "../RelatedProducts";
import { products } from "@/data/products";

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
   const [origin, setOrigin] = useState("50% 50%");
   const [zoomed, setZoomed] = useState(false);

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setOrigin(`${x}% ${y}%`);
   };

   return (
      <div
         className="relative z-1 h-125 w-full overflow-hidden cursor-zoom-in"
         onMouseMove={handleMouseMove}
         onMouseEnter={() => setZoomed(true)}
         onMouseLeave={() => setZoomed(false)}
      >
         <Image
            src={src}
            alt={alt}
            className="object-cover max-h-[85%] max-w-full mx-auto my-auto transition-transform duration-200 ease-out"
            style={{
               transform: zoomed ? "scale(2)" : "scale(1)",
               transformOrigin: origin,
            }}
            fill
         />
      </div>
   );
}

function ThumbnailSlider({ images }: { images: string[] }) {
   const { scrollTo } = useCarousel();

   return (
      <div className="flex gap-1 z-20 relative cursor-pointer mt-1">
         {images.map((img, i) => (
            <div key={img} className=" flex h-20 w-20 border-mist-200 border">
               <Image
                  src={`/${img}`}
                  alt={img}
                  priority
                  width={50}
                  height={50}
                  onClick={() => scrollTo(i)}
                  className="mx-auto object-contain"
               />
            </div>
         ))}
      </div>
   );
}

export default function ProductDetailsContent({ slug }: { slug: string }) {
   const product = products.find((p) => toSlug(p.name) === slug);

   if (!product) {
      return <div>Product not found</div>;
   }

   const { name, description, images, category, brand } = product || {};

   return (
      <div className="">
         <div className="max-w-6xl m-auto lg:py-28 space-y-24 pb-12">
            <div className="grid lg:grid-cols-2 gap-15">
               <Carousel className="">
                  <CarouselContent className="ml-0">
                     {images.map((img, index) => (
                        <CarouselItem key={index} className="pl-0 border border-mist-300">
                           <ZoomableImage src={`/${img}`} alt={name} />
                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  <ThumbnailSlider images={images} />
               </Carousel>
               <div className="space-y-8 px-4">
                  <p className="uppercase text-sm text-mist-500">{category}</p>
                  <div className="space-y-4">
                     <h1 className="font-heading text-4xl lg:text-5xl font-semibold mt-4">{name}</h1>
                     <p className="text-lg text-mist-500">Brand: {brand}</p>
                     <p className="text-lg">{description}</p>
                  </div>
               </div>
            </div>
            <div className="w-full space-y-6 p-4">
               <h2 className="text-2xl font-semibold">Related Products</h2>
               <RelatedProducts products={products} currentProductId={product.id} currentCategory={product.category} />
            </div>
         </div>
      </div>
   );
}
