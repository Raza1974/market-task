"use client";

import React, { useState, useEffect } from 'react';
import Loader from '@/components/loader'; 
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/components/cartContext";
import Header2 from "@/components/Header2";

export default function Section9() {
  const {
    cartItems,
    removeFromCart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timeout = setTimeout(() => setIsLoading(false), 3000); // Adjust time as needed
    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, []);
  return (
    <>
    {isLoading ? (
        <Loader /> // Show loader while loading
      ) : (
    <div className='relative z-10'>
    <div className="overflow-hidden">
    <Header2/>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-3xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Shopping Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div
            className="text-center relative z-10 py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <i className="bx bx-cart text-6xl text-gray-300 mb-4"></i>
            <p className="text-xl text-gray-600">Your cart is empty</p>
            <Link href="/home">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg">
                Continue Shopping
              </button>
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="hidden md:grid grid-cols-5 gap-4 p-4 bg-gray-100 font-semibold text-gray-700">
                <div className="col-span-2">Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
              </div>
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 items-center border-b border-gray-200 hover:bg-gray-50 relative z-10 transition-colors duration-150"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                   <div className="col-span-2 flex items-center space-x-4">


                    <div> 
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.description.slice(0, 50)}...
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-700">${item.price.toFixed(2)}</div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-150"
                      title="Decrease quantity"
                    >
                      <i className="bx bx-minus"></i>
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-150"
                      title="Increase quantity"
                    >
                      <i className="bx bx-plus"></i>
                    </button>
                  </div>
                  <div className="font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-150"
                      title="Remove item"
                    >
                      <i className="bx bx-trash text-xl"></i>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:flex lg:space-x-8">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Apply Coupon
                </h2>
                <div className="flex space-x-4">
                  {/* <Input
                    placeholder="Enter coupon code"
                    className="flex-grow"
                  /> */}
                  <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white">
                    Apply Coupon
                  </button>
                </div>
              </div>

              <motion.div
                className="lg:w-1/3 bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Cart Summary
                </h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">
                      ${totalPrice().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-800 font-semibold">Total</span>
                      <span className="text-xl font-bold text-blue-600">
                        ${totalPrice().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <Link href={"/checkout"}>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Proceed to Checkout
                </button>
                </Link>
              </motion.div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/home">
                <button className="text-white border-blue-600 bg-blue-800 p-3 rounded-lg hover:bg-blue-500">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
       </div>
      )}
    </>
  );
}
