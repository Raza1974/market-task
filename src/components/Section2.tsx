"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Product {
  _id: number;
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

export default function Section2() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(
          '*[_type == "product" && "featured" in tags]{"imageUrl": productImage.asset->url,title,price,tags[],_id,dicountPercentage, description,"slug": slug.current,}'
        );
        setProducts(fetchedProducts);
      } catch {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>{error}</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  return (
    <div>
      <div className="lg:w-screen  flex justify-center items-center ">
        <div className="lg:w-[1124px] flex flex-col justify-center gap-10 items-center mt-5 h-full mb-10 md:mb-0">
          <div className="text flex flex-col justify-center gap-3 items-center">
            <p className="text-[20px]">Featured Products</p>
            <h1 className="text-[24px] font-bold">BESTSELLER PRODUCTS</h1>
            <p>Problems trying to resolve the conflict between </p>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((item, index) => (
                <motion.div
                  key={item._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.slug ? (
                    <Link href={`/shop/${item.slug.current || item.slug}`}>
                      <div className="relative h-64 w-full">
                        {item.imageUrl ? (
                          <Image
                            src={urlFor(item.imageUrl).url()}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <p className="text-gray-500">No image available</p>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col flex-grow p-6">
                        <h2 className="font-bold text-xl text-gray-800 mb-2 line-clamp-1">
                          {item.title}
                        </h2>
                        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                          {item.description}
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-lg font-semibold text-green-600">
                            ${item.price}
                          </span>
                          <div className="flex gap-2">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <p className="text-red-500 text-center">
                      Product unavailable
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-5">
            <Link href="/shop">
              <button className="w-full bg-[#2DC071] text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
