"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProductCard from "../ProductCard";
import { categories, DisplayProductsType, products } from "@/data/products";
import CategoryTab from "../CategoryTab";
import Link from "next/link";

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("All");

  const displayProducts =
    activeFilter === "All"
      ? products.slice(0, 12)
      : products.filter((p) => p.category === activeFilter).slice(0, 12);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-3">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Products
          </h2>
          <Link
            href="/products"
            className="font-bold flex items-center gap-1 hover:underline whitespace-nowrap"
          >
            View all {products.length} products <ArrowRight size={14} />
          </Link>
        </div>
        <p className="text-gray-500 mb-8 max-w-2xl leading-relaxed">
          Every product is quality checked before it leaves our Tema facility.
          WhatsApp or email us directly for pricing and availability. We respond
          the same day.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          <CategoryTab
            categories={categories}
            setActiveFilter={setActiveFilter}
            activeFilter={activeFilter}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayProducts.slice(0, 10).map((product: DisplayProductsType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center bg-primary gap-2 text-white px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Browse Full Catalogue <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
