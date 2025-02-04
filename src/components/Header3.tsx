"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCart } from "@/components/cartContext";
import { User, ShoppingBag, X,Home, List, ShoppingCart, Mail } from 'lucide-react';

interface MenuItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { href: "/home", label: "Home", icon: <Home className="w-5 h-5" /> },
  { href: "/shop", label: "Shop", icon: <ShoppingBag className="w-5 h-5" /> },
  { href: "/about", label: "About", icon: <List className="w-5 h-5" /> },
  { href: "/cart", label: "Cart", icon: <ShoppingCart className="w-5 h-5" /> },
  { href: "/contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
];

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const {cartItems} = useCart()
  const cartCount = cartItems.length

  return (
    <div className="">
      <div
        className=" w-screen bg-neutral-100  h-[65px] flex justify-center
       items-center"
      >
        <div className=" w-[1049px] flex items-center justify-around md:justify-between  h-[58px]">
          <div className="logo">
            <h1 className="font-bold text-[24px]">Bandage</h1>
          </div>
          <div className="nav hidden md:flex ">
            <ul className=" flex gap-5">
              <Link href={"/home"}>
                <li>Home</li>
              </Link>
              <Link href={"/shop"}>
              <li>Shop</li> 
              </Link>
              <Link href={"/about"}>
              <li>About</li>
              </Link>
              <Link href={"/product"}>
              <li>Product</li> 
              </Link> 
              <Link href={"/contact"}>
              <li>Contact</li>
              </Link>
              <Link href={"/pricing"}>
              <li>Pages</li>
              </Link>
            </ul>
          </div>
          <div className="links flex gap-4 text-[#23A6F0]">
            <p className="font-bold text-[#23A6F0] md:flex hidden">
              Login / Register
            </p>
            <div className=" text-lg flex justify-center items-center gap-2">
              <i className="bx bx-search-alt-2"></i>
            
              <div>
              <Link href={"/cart"} className='flex justify-center items-center'>
              
            <i className="bx bx-cart text-2xl"></i>
            <span className="bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{cartCount}</span>
              </Link>
            </div>
              <i className="bx bx-heart text-2xl "></i>
              <i
                className="bx bx-menu-alt-right cursor-pointer text-2xl lg:hidden"
                onClick={handleMenu}
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-menu"> 
      <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            className="fixed inset-y-0 left-0 w-80 bg-white shadow-lg z-50 overflow-hidden flex flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
             
              <Link href={"/home"}>
              <h2 className="font-bold text-lg">
              BANDAGE
              </h2>
              </Link>

              <motion.button
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <nav className="flex-grow overflow-y-auto py-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <motion.a
                        className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={handleClose}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.icon}
                        <span className="ml-3 text-lg font-medium">{item.label}</span>
                      </motion.a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-gray-200">
              <Link href="/about">
                <motion.a
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User className="w-5 h-5 mr-3" />
                  <span className="text-lg font-medium">My Account</span>
                </motion.a>
              </Link>
            </div>

            <div className="p-4">
              <Link href={"/cart"}>
              <motion.button
                className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold text-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Cart
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
      </div>

    </div>
  );
}
