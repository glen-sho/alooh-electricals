"use client";
import React, { useState } from "react";
import productsData from "@/productData.json";
import { ProductCard } from "../ProductCard";
import Link from "next/link";
import { toSlug } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function Products() {
   const [selectedCategory, setSelectedCategory] = useState("All");
   const filteredProducts =
      selectedCategory === "All"
         ? productsData
         : productsData.filter((product) => product.category === selectedCategory);

   const categories = ["All", ...new Set(productsData.map((product) => product.category))];
   return (
      <div className="max-w-7xl mx-auto my-12 space-y-6 px-4">
         <div className=" flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center">
            <div className="lg:flex gap-2 items-center">
               <p className="font-semibold shrink-0">Filter by:</p>
               <Select onValueChange={(e) => setSelectedCategory(e)}>
                  <SelectTrigger className="w-full min-w-56">
                     <SelectValue placeholder={selectedCategory} />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        {categories.map((cat) => (
                           <SelectItem value={cat} key={cat} className="cursor-pointer text-lg capitalize">
                              {cat}
                           </SelectItem>
                        ))}
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div className="">
               <strong>{filteredProducts.length}</strong> {"  "}items
            </div>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-8 lg:gap-4 pb-26">
            {filteredProducts.map((product) => {
               const slug = toSlug(product.title);
               return (
                  <Link href={`/${slug}`} key={product.id}>
                     <ProductCard title={product.title} description={product.description} images={product.images} />
                  </Link>
               );
            })}
         </div>
      </div>
   );
}
