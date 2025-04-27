'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import useCartContext from '@/context/CartContext';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { getCartItemsCount } = useCartContext();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and main navigation */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              DIYHub
            </Link>
            <div className="hidden md:flex items-center ml-10 space-x-8">
              <Link href="/browse-product" className="text-gray-700 hover:text-indigo-600 transition duration-200">
                Browse Products
              </Link>
              <Link href="/user/orders" className="text-gray-700 hover:text-indigo-600 transition duration-200">
                My Orders
              </Link>
              <Link href="/user/wishlist" className="text-gray-700 hover:text-indigo-600 transition duration-200">
                Wishlist
              </Link>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-6">
            {/* Cart */}
            <Link 
              href="/cart" 
              className="relative text-gray-700 hover:text-indigo-600 transition duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition duration-200"
              >
                <img
                  src="https://via.placeholder.com/32"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span>My Account</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link href="/user/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                    Profile Settings
                  </Link>
                  <Link href="/user/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                    My Orders
                  </Link>
                  <Link href="/user/addresses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                    My Addresses
                  </Link>
                  <button
                    onClick={() => {
                      // Handle logout
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;