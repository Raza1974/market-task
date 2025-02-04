"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";
import Loader from "@/components/loader"; // Import the Loader component

export default function ShopPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timeout = setTimeout(() => setIsLoading(false), 3000); // Adjust time as needed
    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, []);

  return (
    <div className="overflow-hidden">
      {isLoading ? (
        <Loader /> // Show loader while loading
      ) : (
        <>
          <Section6 />
          <Section7 />
          <Footer />
          <Section8 />
          <Section9 />
        </>
      )}
    </div>
  );
}
