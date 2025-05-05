'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import useCartContext from '@/context/CartContext';

const ViewProduct = ({ params }) => {
  const { id } = params; // Extract the product ID from the route parameters
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();
  const { addItemToCart, isInCart, removeItemFromCart } = useCartContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/getbyid/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to fetch product details');
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (error) {
    return <p className="text-red-500 text-center mt-6">{error}</p>;
  }

  if (!product) {
    return <p className="text-gray-500 text-center mt-6">Loading product details...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <video src={product.videoUrl} controls muted autoplay loop></video>
        <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-blue-500 font-bold mb-2">Price: ${product.price}</p>
        <p className="text-gray-600 mb-2">Category: {product.category}</p>
        <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
        <p className="text-gray-600 mb-6">Size: {product.size}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => router.back()}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Go Back
          </button>
          {isInCart(product) ? (
            <button 
              onClick={() => removeItemFromCart(product)}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Remove from Cart
            </button>
          ) : (
            <button 
              onClick={() => addItemToCart({...product, pprice: product.price})}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;