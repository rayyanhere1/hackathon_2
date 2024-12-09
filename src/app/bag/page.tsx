import React from "react";

export default function BagPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold">Your Bag</h1>
        <p className="text-gray-600">Let’s make it yours!</p>
      </header>

      {/* Cart Items Section */}
      <div className="px-8 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row border-b border-gray-300 pb-6 mb-6">
          {/* Item Image */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <img
              src="/images/air-max-shoe.jpg"
              alt="Nike Air Max"
              className="w-full h-auto rounded-md"
            />
          </div>
          {/* Item Details */}
          <div className="lg:w-2/3 lg:pl-10">
            <h2 className="text-2xl font-bold mb-2">Nike Air Max</h2>
            <p className="text-gray-600 mb-4">Men's Shoes - Black/White</p>
            <p className="text-lg font-bold mb-2">$120.00</p>
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Remove from Bag
            </button>
          </div>
        </div>

        {/* Subtotal and Checkout */}
        <div className="text-right">
          <p className="text-lg mb-2">Subtotal: $120.00</p>
          <button className="px-6 py-3 bg-black text-white rounded-md">
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Nike, Inc. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
