"use client";

import { useState } from "react";
import productsData from "@/productData.json";
import { toSlug } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import RelatedProducts from "../RelatedProducts";

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [origin, setOrigin] = useState("50% 50%");
  const [zoomed, setZoomed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
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
    <div className="flex gap-4 z-20 relative  cursor-pointer h-24 w-24">
      {images.map((img, i) => (
        <Image
          key={img}
          src={`/${img}`}
          alt={img}
          fill
          objectFit="contain"
          onClick={() => scrollTo(i)}
          className="bg-neutral-100"
        />
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
    <div className="max-w-6xl py-20 m-auto">
      <div className="grid grid-cols-2 gap-15">
        <Carousel>
          <CarouselContent className="ml-0">
            {images.map((img, index) => (
              <CarouselItem key={index} className="pl-0">
                <ZoomableImage src={`/${img}`} alt={title} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <ThumbnailSlider images={images} />
        </Carousel>
        <div className="space-y-8">
          <p className="capitalize p-0.5 border text-sm border-neutral-200 rounded-full px-3 w-fit">
            {category}
          </p>
          <div className="space-y-4">
            <h1 className="font-heading text-5xl font-semibold mt-4">
              {title}
            </h1>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
      <>
        <h2 className="pt-20 pb-8 text-3xl font-semibold">Related Products</h2>
        <RelatedProducts
          products={productsData}
          currentProductId={product.id}
          currentCategory={product.category}
        />
      </>
    </div>
  );
}
