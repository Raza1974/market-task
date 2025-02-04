"use client"
import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import Link  from 'next/link';


export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);
  // return (
  //   <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
  //     <div className="mb-10">
  //       <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
  //       <h2 className="text-2xl">You successfully sent</h2>

  //       <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
  //         ${amount}
  //       </div>
  //     </div>
  //   </main>
  // );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-md w-full text-center"
      >
        <div className="bg-gray-50 px-6 py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
          <p className="text-gray-600">Thank you for your purchase</p>
        </div>
        <div className="px-6 py-8">
          <p className="text-gray-600 mb-4">You have successfully paid</p>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <span className="text-4xl font-bold text-gray-800">${amount}</span>
          </div>
          <Link href='/shop'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-200"
          >
           Shop More
          </motion.button>
          </Link>
        </div>
        <div className="bg-gray-50 px-6 py-4">
          <p className="text-sm text-gray-500">A confirmation email has been sent to your registered email address.</p>
        </div>
      </motion.div>
    </div>
  );
}