"use client";
import React, { useState } from "react";
import productsData from "@/productData.json";
import { ProductCard } from "../ProductCard";
import Link from "next/link";
import { toSlug } from "@/lib/utils";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  const categories = [
    "All",
    ...new Set(productsData.map((product) => product.category)),
  ];
  return (
    <div className="">
      <div className="max-w-7xl p-4 mx-auto">
        <div className="flex gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const slug = toSlug(product.title);
            return (
              <Link href={`/${slug}`} key={product.id}>
                <ProductCard
                  title={product.title}
                  description={product.description}
                  images={product.images}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
