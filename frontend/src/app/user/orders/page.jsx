'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/getall`);
        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to load orders. Please try again.');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen p-8 flex justify-center items-center">
        <div className="text-xl font-semibold">Loading your orders...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8 flex justify-center items-center">
        <div className="text-xl font-semibold text-red-500">{error}</div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen p-8 flex justify-center items-center">
        <div className="text-xl font-semibold">You haven't placed any orders yet.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order._id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">Order #{order._id.slice(-6).toUpperCase()}</h2>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {new Date(order.date).toLocaleDateString()}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Delivery Address:</span> {order.deliveryAddress}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Contact:</span> {order.contactNumber}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-medium mb-2">Items:</h3>
                <ul className="space-y-2">
                  {order.itemList.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.title} (x{item.quantity})</span>
                      <span>${item.subtotal.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between font-semibold">
                <span>Total:</span>
                <span>
                  ${order.itemList.reduce((sum, item) => sum + item.subtotal, 0).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;