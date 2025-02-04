"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCart } from "@/components/cartContext";
import { User, ShoppingBag, X, Home, List, ShoppingCart, Mail } from 'lucide-react';

const menuItems = [
  { href: "/home", label: "Home", icon: <Home className="w-5 h-5" /> },
  { href: "/shop", label: "Shop", icon: <ShoppingBag className="w-5 h-5" /> },
  { href: "/about", label: "About", icon: <List className="w-5 h-5" /> },
  { href: "/register", label: "Login", icon: <User className="w-5 h-5" /> },
  { href: "/contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
];

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const { cartItems } = useCart();
  const cartCount = cartItems.length;

  return (
    <div>
      {/* HEADER */}
      <div className="w-screen bg-neutral-100 h-[65px] flex justify-center items-center">
        <div className="w-[1049px] flex items-center justify-between h-[58px]">
          <Link href="/home" className="text-2xl font-bold">Bandage</Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex">
            <ul className="flex gap-5">
              {menuItems.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-blue-600">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ICONS & CART */}
          <div className="flex gap-4 text-[#23A6F0] items-center">
            <Link href="/register" className="hidden md:flex font-bold">Login / Register</Link>
            <div className="flex gap-2 items-center">
              <Link href="/cart" className="relative flex items-center">
                <ShoppingCart className="text-2xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button className="lg:hidden text-2xl" onClick={handleMenu} aria-label="Toggle menu">
                <List />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
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
              className="fixed inset-y-0 left-0 w-80 bg-white shadow-lg z-50 flex flex-col overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* MENU HEADER */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link href="/home" className="text-lg font-bold">BANDAGE</Link>
                <motion.button
                  className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                  onClick={handleClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* MOBILE NAVIGATION */}
              <nav className="py-4">
                <ul className="space-y-2">
                  {menuItems.map(({ href, label, icon }) => (
                    <li key={href}>
                      <Link href={href} className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200" onClick={handleClose}>
                        {icon}
                        <span className="ml-3 text-lg font-medium">{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* ACCOUNT LINK */}
              <div className="p-4 border-t border-gray-200">
                <Link href="/about" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <User className="w-5 h-5 mr-3" />
                  <span className="text-lg font-medium">My Account</span>
                </Link>
              </div>

              {/* VIEW CART BUTTON */}
              <div className="p-4">
                <Link href="/cart">
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
  );
}
