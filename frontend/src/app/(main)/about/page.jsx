import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-br from-indigo-50 to-white">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-7xl">
            About DIY Innovate
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Your one-stop destination for DIY enthusiasts and creative minds. We connect makers with high-quality supplies and innovative products.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white p-10 rounded-3xl shadow-lg text-center">
            <h2 className="text-4xl font-bold tracking-tight text-indigo-700 sm:text-5xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We aim to empower DIY enthusiasts by providing a marketplace that connects creative minds with quality supplies. Our platform makes it easy to find the materials you need for your next project.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              What We Offer
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center">
              <div className="h-10 w-10 mx-auto mb-4 rounded-full bg-indigo-100"></div>
              <h3 className="text-xl font-semibold text-gray-900">Curated Products</h3>
              <p className="mt-4 text-base text-gray-600">
                Carefully selected materials and supplies from trusted sellers.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center">
              <div className="h-10 w-10 mx-auto mb-4 rounded-full bg-indigo-100"></div>
              <h3 className="text-xl font-semibold text-gray-900">Community</h3>
              <p className="mt-4 text-base text-gray-600">
                Connect with other DIY enthusiasts and share your creations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center">
              <div className="h-10 w-10 mx-auto mb-4 rounded-full bg-indigo-100"></div>
              <h3 className="text-xl font-semibold text-gray-900">Secure Shopping</h3>
              <p className="mt-4 text-base text-gray-600">
                Safe and reliable shopping experience with protected transactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions or suggestions? We'd love to hear from you. Visit our contact page or reach out to our support team.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block px-8 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;