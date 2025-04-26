import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">DIYHub</h3>
          <p>Your one-stop hub for creative DIY ideas, tools, and awesome community sellers.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-indigo-600">Home</a></li>
            <li><a href="#" className="hover:text-indigo-600">Explore</a></li>
            <li><a href="#" className="hover:text-indigo-600">Sell with Us</a></li>
            <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Stay Connected</h4>
          <p>Subscribe for updates, DIY tips, and product launches.</p>
          <form className="mt-3 flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-r-xl hover:bg-indigo-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-sm mt-8 text-gray-500">
        © {new Date().getFullYear()} DIYHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
