
import { Suspense } from 'react';
import { client } from '@/sanity/lib/client';
import ProductDetails from "@/components/productDetails"; // Move ProductDetails to its own Client Component file
import Header2 from '@/components/Header2';
import Footer from '@/components/Footer';
import Section2 from '@/components/Section2';
import Section29 from '@/components/Section29';


async function getProduct(productSlug: string) {
  const query = `
  *[_type == "product" && slug.current == $slug][0] {
    title,
    price,
    tags[],
    _id,
    discountPercentage,
    description,
    "slug": slug.current,
    "imageUrl": productImage.asset->url
  }`
      ; try {
    return await client.fetch(query, { slug: productSlug });
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }: { params: { item: string } }) {
  const product = await getProduct(params.item);

  return (
    <>
    <div className='overflow-hidden'>
     <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
      
      <Header2/>
      <div className="min-h-screen bg-gradient-to-br from-gray-200 to-white text-white p-4 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-900">
          Product Details
          
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductDetails product={product} />
        </Suspense>
      </div>
      <div>
        <Section2/>
      <Section29/>
      </div>
        <Footer/>
    </div>
    
    </>
  );
}
