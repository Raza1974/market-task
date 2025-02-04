"use client"

import { motion } from 'framer-motion';
import { useCart } from "@/components/cartContext";
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/libs/convertToSubCurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PaymentPage() {

    const { totalPrice } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 text-white">

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-md w-full"
      >
        <div className="bg-gray-50 px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Complete Your Payment</h1>
          <p className="text-gray-600">Secure payment processed by Stripe</p>
        </div>
        <div className="px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">Total Amount</span>
            <span className="text-2xl font-bold text-gray-800">${totalPrice().toFixed(2)}</span>
          </div>
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(totalPrice()),
              currency: "usd",
            }}
          >
            <CheckoutPage amount={totalPrice()} />
          </Elements>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-sm text-gray-500">Secure 256-bit SSL encryption</span>
        </div>
      </motion.div>
    </div>
  )
}
