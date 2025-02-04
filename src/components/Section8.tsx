"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import {ChevronDown } from 'lucide-react';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  tags: string[];
  imageUrl: string;
  slug: {
    current: string;
  };
}

export default function Section8() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>("relevant");
  const [searchBar, setSearchBar] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(`*[_type == "product"]{
          title,price,tags[],_id,discountPercentage,description,"slug": slug.current,
          "imageUrl": productImage.asset->url
        }`);
        setProducts(fetchedProducts);
      } catch {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterAndSortProducts = () => {
    const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchBar.toLowerCase())
    );

    switch(sortOption) {
      case "high-low":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "low-high":
        return filteredProducts.sort((a, b) => a.price - b.price);
      default:
        return filteredProducts;
    }
  };

  const sortedAndFilteredProducts = filterAndSortProducts();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div id="shopItem" className="overflow-hidden mt-10 px-4 sm:px-6 lg:px-8">
      <div className='mb-8 animate-fade-in w-full max-w-2xl mx-auto'>
        <div className="relative flex items-center">
          <input 
            value={searchBar} 
            onChange={(e) => setSearchBar(e.target.value)} 
            placeholder='Search product categories...'
            className="w-full py-3 pl-4 pr-32 text-gray-800 bg-white border-2 border-gray-600 rounded-full outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <select 
              title="Sort options"
              className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="high-low">Sort by: High to Low</option>
              <option value="low-high">Sort by: Low to High</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex relative z-10 flex-wrap justify-center gap-2">
          {['Shirt', 'Trouser', "Coat", "Shoes", "underGrament", "Belt"].map((category) => (
            <button
              key={category}
              onClick={(e) =>{
              e.stopPropagation()
                setSearchBar(category)}
              } 

              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedAndFilteredProducts.length > 0 ? (
            sortedAndFilteredProducts.map((item, index) => (
              <motion.div
                key={item._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.slug ? (
                  <Link href={`/shop/${item.slug.current || item.slug}`}>
                    <div className="relative w-full pt-[100%]">
                      {item.imageUrl ? (
                        <Image
                          src={urlFor(item.imageUrl).url() || "/placeholder.svg"}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <p className="text-gray-500">No image available</p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col flex-grow p-4">
                      <h2 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-green-600">
                          ${item.price.toFixed(2)}
                        </span>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <p className="text-red-500 text-center p-4">Product unavailable</p>
                )}
              </motion.div>
            ))
          ) : (
            <p className="text-gray-800 col-span-full text-center animate-fade-in">No items found</p>  
          )}
        </div>
      </div>
    </div>
  );
}

