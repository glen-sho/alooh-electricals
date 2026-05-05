"use client";
import React, { useState } from "react";
import { Factory } from "lucide-react";
import ProductCard from "../../components/ProductCard";
import { categories, products } from "@/data/products";
import CategoryTab from "@/components/CategoryTab";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EMAIL = "glen@aloohelectricals.com";

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [itemsToShow, setItemsToShow] = useState(25);

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);
  const displayProducts = filtered.slice(0, itemsToShow);
  const moreToLoad = filtered.length > itemsToShow;

  const handleLoadMore = () => {
    if (!moreToLoad) return;
    setItemsToShow((prev) => prev + 25);
  };

  return (
    <div className="pb-24">
      <section className="py-6 border-b border-gray-200 bg-stone-200 items-center px-4 md:px-0">
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Full Product Catalogue
          </h1>
          <p className="max-w-2xl leading-relaxed mb-6">
            Browse our complete range of electrical goods supplied and
            manufactured by Alooh Electricals in Tema, Ghana. WhatsApp or email{" "}
            <Link
              href={`mailto:${EMAIL}`}
              className="hover:underline font-bold"
            >
              {EMAIL}
            </Link>{" "}
            for pricing, bulk orders and availability.
          </p>

          <div className="flex items-start gap-3 px-5 py-4 rounded-[7px] text-sm max-w-2xl bg-navy_blue text-mist-300">
            <Factory size={16} className="shrink-0 mt-0.5" />
            <p className="text-base text-mist-300">
              <strong className="text-white font-bold text-base">
                Products marked MADE IN GHANA{" "}
              </strong>{" "}
              are manufactured at our own Tema factory &middot; All other
              products are quality-sourced from our global supply network
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <CategoryTab
            categories={categories}
            setActiveFilter={setActiveFilter}
            activeFilter={activeFilter}
          />

          <p className="mb-6 px-4 md:px-0">
            Showing {displayProducts.length} of {products.length} products
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-8 px-4 md:px-0">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {displayProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-sm">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
        {moreToLoad && (
          <div className="flex items-center justify-center mt-15">
            <Button
              variant="outline"
              className="border-neutral-300 py-6 rounded-md font-semibold hover:bg-neutral-100 cursor-pointer w-70 bg-transparent"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
