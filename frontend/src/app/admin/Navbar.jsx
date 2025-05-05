"use client"
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#FFF8F0] text-[#1A1A1A] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-[#F4A261]">AdminPanel</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="/dashboard" className="hover:text-[#E76F51]">Dashboard</a></li>
          <li><a href="/manage-users" className="hover:text-[#E76F51]">Users</a></li>
          <li><a href="/manage-sellers" className="hover:text-[#E76F51]">Sellers</a></li>
          <li><a href="/browse-products" className="hover:text-[#E76F51]">Products</a></li>
          <li><a href="/settings" className="hover:text-[#E76F51]">Settings</a></li>
        </ul>

        {/* User Actions */}
        <div className="flex space-x-4 items-center">
          <button className="text-[#2A9D8F] hover:underline">Admin</button>
          <button className="bg-[#2A9D8F] text-white px-4 py-2 rounded-xl hover:bg-[#21867A] transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
