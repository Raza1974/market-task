// "use client";

// import { useCart } from "@/components/cartContext";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from 'framer-motion';
// import { urlFor } from "@/sanity/lib/image";
// import  Link  from "next/link";

// interface Product {
//   _id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   priceWithoutDiscount: number;
//   // rating: number;
//   // ratingCount: number;
//   tags: string[];
//   // sizes: string[];
//   imageUrl: string;
//   slug: {
//     current: string;
//   };
// }

// const ProductLoader = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-white">
//       <motion.div
//         className="w-32 h-32 border-t-4 border-blue-500 rounded-full"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.h2
//         className="mt-8 text-2xl font-semibold text-blue-900"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//       >
//         Loading Product Details
//       </motion.h2>
//       <motion.div
//         className="mt-4 flex space-x-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.5 }}
//       >
//         {[0, 1, 2].map((index) => (
//           <motion.div
//             key={index}
//             className="w-3 h-3 bg-blue-500 rounded-full"
//             animate={{
//               scale: [1, 1.5, 1],
//               opacity: [1, 0.5, 1],
//             }}
//             transition={{
//               duration: 1,
//               repeat: Infinity,
//               delay: index * 0.2,
//             }}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };


// export default function ProductDetails({
//   product,
// }: {
//   product: Product | null;
// }) {
//   const { addToCart } = useCart();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <ProductLoader />;
//   }

//   if (!product) {
//     return (
//       <p className="text-center text-lg text-gray-600">
//         Product not found. Please check the product name and try again.
//       </p>
//     );
//   }

//   return (
    
//     <>
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <motion.div 
//         className="main my-8 md:my-14 w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="grid md:grid-cols-5 gap-5 md:grid-rows-4 p-6">
//           <motion.div 
//             className="hidden md:block"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <Image
//               src={urlFor(product.imageUrl).width(170).height(138).url()}
//               alt="Product thumbnail"
//               width={170}
//               height={138}
//               className="object-cover rounded-lg shadow-md"
//             />
//           </motion.div>

//           <motion.div 
//             className="col-span-full md:col-span-2 md:row-span-5"
//             whileHover={{ scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <Image
//               src={urlFor(product.imageUrl).width(500).height(600).url()}
//               alt={product.title}
//               width={500}
//               height={600}
//               className="w-full h-auto object-cover rounded-lg shadow-lg"
//             />
//           </motion.div>

//           <div className="col-span-full md:col-span-2 md:row-span-5 flex flex-col justify-center items-start space-y-4">
//             <motion.h1 
//               className="text-2xl md:text-3xl font-semibold text-blue-900"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               {product.title}
//             </motion.h1>
//             <motion.div 
//               className="flex items-center space-x-2"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//                {[...Array(5)].map((_, i) => (
//                 <i key={i} className="bx bxs-star text-yellow-400"></i>
//               ))}
//             <span className="text-sm text-gray-600">(150 Reviews) | </span>

//               <span className="text-sm text-green-500">In Stock</span>
//             </motion.div>
//             <motion.p 
//               className="text-2xl font-bold text-blue-900"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//             >
//               ${product.price.toFixed(2)}
//             </motion.p>
//             <motion.p 
//               className="text-gray-700"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             >
//               {product.description}
//             </motion.p>
//             <div className="w-full h-px bg-gray-200 my-4"></div>
//             <div className="space-y-4 w-full">
//               <motion.div 
//                 className="flex items-center space-x-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//               >
//                 <h2 className="text-lg text-blue-900 font-medium">Colors:</h2>
//                 <div className="flex space-x-2">
//                   <motion.button 
//                     className="w-6 h-6 bg-blue-300 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                   ></motion.button>
//                   <motion.button 
//                     className="w-6 h-6 bg-red-300 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                   ></motion.button>
//                 </div>
//               </motion.div>
//               <motion.div 
//                 className="flex items-center space-x-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7, duration: 0.5 }}
//               >
//                 {/* <h2 className="text-lg font-medium text-blue-900">Size:</h2> */}
//                 <div className="flex items-center space-x-4">
//                 <h2 className="text-lg font-medium text-black">Size:</h2>
//                 <div className="flex space-x-2">
//                   {[ 'S', 'M', 'L', 'XL'].map((size) => (
//                     <button
//                       key={size}
//                       className="w-10 h-10 flex items-center justify-center border text-black border-gray-300 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               </motion.div>
//               <motion.div 
//                 className="flex items-center space-x-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8, duration: 0.5 }}
//               >
//                 <motion.button
//                   className="bg-blue-900 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() =>
//                     addToCart({
//                       id: product._id,
//                       title: product.title,
//                       price: product.price,
//                       quantity: 1,
//                       image:product.imageUrl,
//                       description: product.description,
//                     })
//                   }
//                 >
//                   Add to Cart
//                 </motion.button>
//                 <Link href="#reviews">
//                 <motion.button
//                   className="bg-blue-900 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
                  
//                 >
//                   Add Reviews
//                 </motion.button>
//                 </Link>
//                 <motion.button 
//                   className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-md hover:shadow-lg"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                     />
//                   </svg>
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
      
//     </>
//   );
// }



//------------------------------------------------------------------------------------------------


"use client";

import { useCart } from "@/components/cartContext";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

// Define Product interface
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

// Loader Component
const ProductLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-white">
      <motion.div
        className="w-32 h-32 border-t-4 border-blue-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.h2
        className="mt-8 text-2xl font-semibold text-blue-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Loading Product Details
      </motion.h2>
      <motion.div
        className="mt-4 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 bg-blue-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default function ProductDetails({ product }: { product: Product | null }) {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ProductLoader />;
  }

  if (!product) {
    return (
      <p className="text-center text-lg text-gray-600">
        Product not found. Please check the product name and try again.
      </p>
    );
  }

  return (
    
        <>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="main my-8 md:my-14 w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-5 gap-5 md:grid-rows-4 p-6">
              <motion.div 
                className="hidden md:block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={urlFor(product.imageUrl).width(170).height(138).url()}
                  alt="Product thumbnail"
                  width={170}
                  height={138}
                  className="object-cover rounded-lg shadow-md"
                />
              </motion.div>
    
              <motion.div 
                className="col-span-full md:col-span-2 md:row-span-5"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={urlFor(product.imageUrl).width(500).height(600).url()}
                  alt={product.title}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </motion.div>
    
              <div className="col-span-full md:col-span-2 md:row-span-5 flex flex-col justify-center items-start space-y-4">
                <motion.h1 
                  className="text-2xl md:text-3xl font-semibold text-blue-900"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {product.title}
                </motion.h1>
                <motion.div 
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                   {[...Array(5)].map((_, i) => (
                    <i key={i} className="bx bxs-star text-yellow-400"></i>
                  ))}
                <span className="text-sm text-gray-600">(150 Reviews) | </span>
    
                  <span className="text-sm text-green-500">In Stock</span>
                </motion.div>
                <motion.p 
                  className="text-2xl font-bold text-blue-900"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  ${product.price.toFixed(2)}
                </motion.p>
                <motion.p 
                  className="text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {product.description}
                </motion.p>
                <div className="w-full h-px bg-gray-200 my-4"></div>
                <div className="space-y-4 w-full">
                  <motion.div 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <h2 className="text-lg text-blue-900 font-medium">Colors:</h2>
                    <div className="flex space-x-2">
                      <motion.button 
                        className="w-6 h-6 bg-blue-300 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      ></motion.button>
                      <motion.button 
                        className="w-6 h-6 bg-red-300 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      ></motion.button>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    {/* <h2 className="text-lg font-medium text-blue-900">Size:</h2> */}
                    <div className="flex items-center space-x-4">
                    <h2 className="text-lg font-medium text-black">Size:</h2>
                    <div className="flex space-x-2">
                      {[ 'S', 'M', 'L', 'XL'].map((size) => (
                        <button
                          key={size}
                          className="w-10 h-10 flex items-center justify-center border text-black border-gray-300 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
    
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <motion.button
                      className="bg-blue-900 text-sm md:text-md hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        addToCart({
                          id: product._id,
                          title: product.title,
                          price: product.price,
                          quantity: 1,
                          image:product.imageUrl,
                          description: product.description,
                        })
                      }
                    >
                      Add to Cart
                    </motion.button>
                    <Link href="#reviews">
                    <motion.button
                      className="bg-blue-900
                      text-sm md:text-md hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      
                    >
                      Add Reviews
                    </motion.button>
                    </Link>
                    <motion.button 
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="hidden lg:flex">

                      <svg
                      
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      </div>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
          
        </>
      );
}