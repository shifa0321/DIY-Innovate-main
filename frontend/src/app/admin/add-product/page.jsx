'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';

const AddProduct = () => {
  const addProduct = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: 0,
      category: '',
      stock: 0,
      size: '',
      imageUrl: '',
    },
    onSubmit: (values, { resetForm }) => {
      axios
        .post('http://localhost:5000/product/add', values)
        .then((result) => {
          console.log(result.data);
          resetForm();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Product</h1>
        <form onSubmit={addProduct.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={addProduct.values.title}
              onChange={addProduct.handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <textarea
              name="description"
              value={addProduct.values.description}
              onChange={addProduct.handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price:
            </label>
            <input
              type="number"
              name="price"
              value={addProduct.values.price}
              onChange={addProduct.handleChange}
              min="0"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category:
            </label>
            <input
              type="text"
              name="category"
              value={addProduct.values.category}
              onChange={addProduct.handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
              Stock:
            </label>
            <input
              type="number"
              name="stock"
              value={addProduct.values.stock}
              onChange={addProduct.handleChange}
              min="0"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">
              Size:
            </label>
            <input
              type="text"
              name="size"
              value={addProduct.values.size}
              onChange={addProduct.handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
              Image URL:
            </label>
            <input
              type="file"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;