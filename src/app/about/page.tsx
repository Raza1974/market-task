"use client";

import React, { useState, useEffect } from 'react';
import Loader from '@/components/loader';
import Footer from '@/components/Footer'
import Header3 from '@/components/Header3'
import Section13 from '@/components/Section13'
import Section14 from '@/components/Section14'
import Section15 from '@/components/Section15'
import Section16 from '@/components/Section16'
import Section17 from '@/components/Section17'
import Section18 from '@/components/Section18'


export default function AboutPage() {
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
    <div className=' overflow-hidden'>
      <Header3/>
      <Section13/>
      <Section14/>
      <Section15/>
      <Section16/>
      <Section17/>
      <Section18/>
      <Footer/>
    </div>
      )}
    </>
  )
}
