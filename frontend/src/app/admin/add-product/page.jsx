'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';

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
      videoUrl: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/product/add`, values)
        .then((result) => {
          console.log(result.data);
          resetForm();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  const uploadVideo = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return toast.error('Please select a file');
    }
    console.log(file);

    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'mypreset');
    fd.append('cloud_name', 'drxbriqk4');

    axios.post('https://api.cloudinary.com/v1_1/drxbriqk4/video/upload', fd)
      .then((result) => {
        console.log(result.data.url);
        addProduct.setFieldValue('videoUrl', result.data.url);
        toast.success('Video uploaded successfully!');
      }).catch((err) => {
        console.log(err);
        toast.error('Video upload failed!');
      });
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return toast.error('Please select a file');
    }
    console.log(file);

    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'mypreset');
    fd.append('cloud_name', 'drxbriqk4');

    axios.post('https://api.cloudinary.com/v1_1/drxbriqk4/image/upload', fd)
      .then((result) => {
        console.log(result.data.url);
        addProduct.setFieldValue('imageUrl', result.data.url);
        toast.success('Image uploaded successfully!');
      }).catch((err) => {
        console.log(err);
        toast.error('Image upload failed!');
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Add New Product</h1>
        <form onSubmit={addProduct.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="col-span-1">
            <label className="block mb-1 text-gray-700 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={addProduct.values.title}
              onChange={addProduct.handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Category */}
          <div className="col-span-1">
            <label className="block mb-1 text-gray-700 font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={addProduct.values.category}
              onChange={addProduct.handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 text-gray-700 font-medium">Description</label>
            <textarea
              name="description"
              value={addProduct.values.description}
              onChange={addProduct.handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={addProduct.values.price}
              onChange={addProduct.handleChange}
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={addProduct.values.stock}
              onChange={addProduct.handleChange}
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Size */}
          {/* <div>
            <label className="block mb-1 text-gray-700 font-medium">Size</label>
            <input
              type="text"
              name="size"
              value={addProduct.values.size}
              onChange={addProduct.handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              required
            />
          </div> */}
          

          {/* Image Upload */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Image</label>
            <input
              type="file"
              onChange={uploadFile}
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
            />
            {addProduct.values.imageUrl && (
              <img src={addProduct.values.imageUrl} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded" />
            )}
          </div>

          {/* Video Upload */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-gray-700 font-medium">Video</label>
            <input
              type="file"
              onChange={uploadVideo}
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
            />
            {addProduct.values.videoUrl && (
              <video controls className="mt-2 w-full rounded-md">
                <source src={addProduct.values.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );

};


export default AddProduct;