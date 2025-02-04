"use client"
import React, { useState, useEffect } from 'react';
import Loader from '@/components/loader'; // Import the Loader component
import Footer from '@/components/Footer'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import HeroPage from '@/components/Hero'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timeout = setTimeout(() => setIsLoading(false), 3000); // Adjust time as needed
    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, []);
  return (
    <div className='overflow-hidden'>
      {isLoading ? (
        <Loader /> // Show loader while loading
      ) : (
        <>
      <Header1/>
      <Header2/>
      <HeroPage/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
       <Section5/>
      <Footer/>
        </>
      )}
    </div>
  )
}
