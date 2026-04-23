"use client";
import React, { useState } from "react";
import productsData from "@/productData.json";
import { ProductCard } from "../ProductCard";
import Link from "next/link";
import { toSlug } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemsToShow, setItemsToShow] = useState(12);
  const filtered =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  const filteredProducts = filtered.slice(0, itemsToShow);

  const categories = [
    "All",
    ...new Set(productsData.map((product) => product.category)),
  ];

  const moreToLoad = filtered.length > itemsToShow;

  const handleLoadMore = () => {
    if (!moreToLoad) return;
    setItemsToShow((prev) => prev + 8);
  };
  return (
    <div className="max-w-7xl mx-auto my-12 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="font-semibold shrink-0">Filter by:</p>
          <Select onValueChange={(e) => setSelectedCategory(e)}>
            <SelectTrigger className="w-full min-w-56">
              <SelectValue placeholder={selectedCategory} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categories.map((cat) => (
                  <SelectItem
                    value={cat}
                    key={cat}
                    className="cursor-pointer text-lg capitalize"
                  >
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
      {moreToLoad && (
        <div className="flex items-center justify-center mt-15">
          <Button
            className="border-neutral-300 py-6 rounded-md font-semibold hover:bg-neutral-400 hover:text-white cursor-pointer w-70"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
