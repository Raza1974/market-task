import { createClient } from '@sanity/client';

// Load environment variables
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2025-01-13',
  token: process.env.SANITY_API_TOKEN, // Secure token from env
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${imageUrl}`);

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`✅ Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`❌ Failed to upload image: ${imageUrl}`, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: { _ref: imageId },
        },
        tags: product.tags,
        discountPercentage: product.discountPercentage, // Fixed Typo
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`✅ Product uploaded successfully: ${product.title}`, createdProduct);
    } else {
      console.log(`⚠️ Skipped product ${product.title} due to image upload failure.`);
    }
  } catch (error) {
    console.error(`❌ Error uploading product: ${product.title}`, error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const products = await response.json();
    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('❌ Error fetching products:', error);
  }
}

importProducts();
