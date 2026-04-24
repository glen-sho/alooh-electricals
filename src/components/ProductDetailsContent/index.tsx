"use client";

import { useState } from "react";
import productsData from "@/productData.json";
import { toSlug } from "@/lib/utils";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel";
import RelatedProducts from "../RelatedProducts";

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
         className="relative z-1 bg-mist-100 h-125 w-full overflow-hidden cursor-zoom-in"
         onMouseMove={handleMouseMove}
         onMouseEnter={() => setZoomed(true)}
         onMouseLeave={() => setZoomed(false)}
      >
         <Image
            src={src}
            alt={alt}
            className="object-contain max-h-[85%] max-w-[85%] mx-auto my-auto transition-transform duration-200 ease-out"
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
            <div key={img} className="bg-neutral-100 flex h-20 w-20">
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
   const product = productsData.find((p) => toSlug(p.title) === slug);

   if (!product) {
      return <div>Product not found</div>;
   }

   const { title, description, images, category } = product || {};

   return (
      <div className="">
         <div className="max-w-6xl m-auto lg:py-28 space-y-24 pb-12">
            <div className="grid lg:grid-cols-2 gap-15">
               <Carousel className="">
                  <CarouselContent className="ml-0">
                     {images.map((img, index) => (
                        <CarouselItem key={index} className="pl-0">
                           <ZoomableImage src={`/${img}`} alt={title} />
                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  <ThumbnailSlider images={images} />
               </Carousel>
               <div className="space-y-8 px-4">
                  <p className="capitalize p-0.5 border text-sm border-neutral-200 rounded-full px-3 w-fit">
                     {category}
                  </p>
                  <div className="space-y-4">
                     <h1 className="font-heading text-4xl lg:text-5xl font-semibold mt-4">{title}</h1>
                     <p className="text-lg">{description}</p>
                  </div>
               </div>
            </div>
            <div className="w-full space-y-6 p-4">
               <h2 className="text-2xl font-semibold">Related Products</h2>
               <RelatedProducts
                  products={productsData}
                  currentProductId={product.id}
                  currentCategory={product.category}
               />
            </div>
         </div>
      </div>
   );
}
