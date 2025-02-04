
"use client"

import { useState,useEffect  } from "react";
import { useCart } from "@/components/cartContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"
import { X, Loader2 } from 'lucide-react';
import Header2 from "@/components/Header2";

interface ShippingDetails {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  addressResidentialIndicator: "yes" | "no";
  // paymentMethod: "creditCard" | "paypal" | "bankTransfer";
  paymentMethod: string;

}

interface OrderConfirmation {
  shipmentId: string;
//   rateId: string;
  shipDate: string;
  userDetails: ShippingDetails;
  orderSummary: {
    items: Array<{ title: string; quantity: number; price: number }>;
    totalPrice: number;
  };
}

const OrderConfirmationDrawer = ({ isOpen, onClose, orderDetails }: { isOpen: boolean; onClose: () => void; orderDetails: OrderConfirmation }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl z-50 overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Order Confirmation</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700" title="Close">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-700">Order Summary</h3>
                {orderDetails.orderSummary.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.title}</span>
                    <span>{item.quantity} x ${item.price.toFixed(2)}</span>
                  </div>
                ))}
                <div className="mt-2 pt-2 border-t border-gray-200 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${orderDetails.orderSummary.totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <div>
              <div>
                <h3 className="font-semibold text-lg text-gray-700">Shipment Details</h3>
                <p>Shipment ID: {orderDetails.shipmentId}</p>
                {/* <p>Rate ID: {orderDetails.rateId}</p> */}
                <p>Ship Date: {new Date(orderDetails.shipDate).toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-700">Shipping Address</h3>
                <p>{orderDetails.userDetails.name}</p>
                <p>{orderDetails.userDetails.addressLine1}</p>
                {orderDetails.userDetails.addressLine2 && <p>{orderDetails.userDetails.addressLine2}</p>}
                <p>{`${orderDetails.userDetails.city}, ${orderDetails.userDetails.state} ${orderDetails.userDetails.postalCode}`}</p>
                <p>{orderDetails.userDetails.country}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-700">Contact Information</h3>
                <p>Phone: {orderDetails.userDetails.phone}</p>
              </div>
              <div>
                {/* <h3 className="font-semibold text-lg text-gray-700">Payment Method</h3>
                <p>{orderDetails.userDetails.paymentMethod}</p> */}
                 <div className="mt-6">
                  <Link href="/payment">
              <motion.button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // disabled={isLoading}
              >
                Proceed To Payment
                {/* {isLoading ? 'Processing...' : 'Submit Order'} */}
              </motion.button>
                  </Link>
            </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LoadingOverlay = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center"
    >
      <Loader2 className="h-12 w-12 text-indigo-600 animate-spin mb-4" />
      <p className="text-lg font-semibold text-gray-800">Processing your order...</p>
    </motion.div>
  </div>
);

export default function Section9() {

  useEffect(() => {
    // Simulate data fetching
    const timeout = setTimeout(() => setIsLoading(false), 3000); // Adjust time as needed
    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, []);
  const { cartItems, removeFromCart, totalPrice } = useCart();
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    addressResidentialIndicator: "yes",
    paymentMethod: "creditCard",
  });
  const [error, setError] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState<OrderConfirmation | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingDetails.name || !shippingDetails.phone || !shippingDetails.addressLine1 || !shippingDetails.city || !shippingDetails.state || !shippingDetails.postalCode || !shippingDetails.country) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setIsLoading(true);

    // try {
      
    // } catch (error) {
    //   console.log(error)
    // }

    try {
      const response = await fetch("/api/shipment/get-rates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shipToAddress: {
            name: shippingDetails.name,
            phone: shippingDetails.phone,
            addressLine1: shippingDetails.addressLine1,
            addressLine2: shippingDetails.addressLine2,
            cityLocality: shippingDetails.city,
            stateProvince: shippingDetails.state,
            postalCode: shippingDetails.postalCode,
            countryCode: shippingDetails.country,
            addressResidentialIndicator: shippingDetails.addressResidentialIndicator,
          },
          packages: [
            { weight: { value: 5, unit: "ounce" }, dimensions: { height: 3, width: 15, length: 10, unit: "inch" } },
          ],
          name: shippingDetails.name,
          // productName: orderConfirmation?.orderSummary.items , // You might want to generate a unique order title
          orderItems: cartItems.map(item => ({
            productName: item.title,
            quantity: item.quantity,
            price: item.price
          })),
          totalprice: totalPrice(),
          
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to get shipping rates');
      }

      const data = await response.json();
      console.log(data)

      if(data.url){

      }else{
        const confirmation: OrderConfirmation = {
          shipmentId: data.shipmentId,
          // rateId: data.rateResponse.rates[0].rateId,
          shipDate: data.shipDate,
          userDetails: shippingDetails,
          orderSummary: {
            items: cartItems.map(item => ({
              title: item.title,
              quantity: item.quantity,
              price: item.price
            })),
            totalPrice: totalPrice()
          }
        };
        setOrderConfirmation(confirmation);
        setIsDrawerOpen(true);

        // Clear form details
        setShippingDetails({
          name: "",
          phone: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          postalCode: "",
          country: "",
          addressResidentialIndicator: "yes",
          paymentMethod: "creditCard",
        });
      }

      
    } catch (error) {
      console.error('Error submitting order:', error);
      setError('An error occurred while processing your order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* {isLoad? (
        <Loader /> // Show loader while loading
      ) : ( */}
    <>

     <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
    <Header2/>
    <div className="min-h-screen relative zoom-in-105 bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Order Summary</h2>
          <div className="mb-6">
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between text-sm font-medium text-gray-700">
                  <span>{item.title}</span>
                  <span>{item.quantity} x ${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-lg font-semibold text-gray-800">
              <span>Total Price</span>
              <span>${totalPrice().toFixed(2)}</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Shipping Details</h2>
          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={shippingDetails.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={shippingDetails.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                value={shippingDetails.addressLine1}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={shippingDetails.addressLine2}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={shippingDetails.city}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={shippingDetails.state}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={shippingDetails.postalCode}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={shippingDetails.country}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="addressResidentialIndicator" className="block text-sm font-medium text-gray-700">Residential Address?</label>
              <select
                id="addressResidentialIndicator"
                name="addressResidentialIndicator"
                value={shippingDetails.addressResidentialIndicator}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Payment Method Selection */}
            {/* <div className="mt-6">
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={shippingDetails.paymentMethod}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
              </select>
            </div> */}

            {/* Submit Button */}
            <div className="mt-6">
              <motion.button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Submit Order'}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>

      {orderConfirmation && (
        <OrderConfirmationDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          orderDetails={orderConfirmation}
        />
      )}

      <AnimatePresence>
        {isLoading && <LoadingOverlay />}
      </AnimatePresence>
    </div>
    </>
      {/* // )} */}
    </>
  );
}
