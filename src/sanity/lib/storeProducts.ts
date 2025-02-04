// const client = require("./client")
// import fetchProducts from './fetchProducts'; // Import the function

// const storeProductsInSanity = async () => {
//     try{
//         const products = await fetchProducts()
//         for(const product of products){
//             const doc = {
//                 _type: "product",
//                 title: product.title,
//                 price: product.price,
//                 description: product.description,
//                 imageUrl: product.imageUrl
//             }

//             const result = await client.create(doc)
//             console.log("stored product: ", result)
//         } 
//         console.log('All products stored successfully!');
//     }
//   catch (error) {
//     console.error('Error storing products:', error);
//     }
// }

// storeProductsInSanity()
// const syncProducts = async () => {
//     const products = await fetchProducts();
//     await storeProductsInSanity(products);
//     console.log('Products synced to Sanity!');
//   };
  
//   syncProducts();

import { client } from "./client";


const fetchProducts = async () => {
  const response = await fetch('https://677d93bc4496848554cb2350.mockapi.io/productsDetails/productDetails'); // Mock API URL
  const products = await response.json();
  return products;
};

interface Product {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

const storeProductsInSanity = async (products: Product[]) => {
  for (const product of products) {
    try {
      const result = await client.create({
        _type: 'product',
        title: product.title,
        price: product.price,
        description: product.description,
        imageUrl: product.imageUrl,
      });
      console.log('Stored product:', result);
    } catch (error) {
      console.error('Error storing product:', error);
    }
  }
};

const syncProducts = async () => {
  const products = await fetchProducts();
  await storeProductsInSanity(products);
  console.log('Products synced to Sanity!');
};

syncProducts();
