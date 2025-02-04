"use client"
import React, { useState, useEffect } from 'react';
import Loader from '@/components/loader'; 
import Footer from '@/components/Footer'
import Header2 from '@/components/Header3'
import Section19 from '@/components/Section19'
import Section20 from '@/components/Section20'
import Section21 from '@/components/Section21'
import Section28 from '@/components/Section28'

export default function ContactPage() {
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
        <Header2/>
      <Section19/>
      <Section28/>
      <Section20/>
      <Section21/>
      <Footer/>
      </>
      )}
    </div>
  )
}
