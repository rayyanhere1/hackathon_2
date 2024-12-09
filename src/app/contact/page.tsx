import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-600">We're here to help with any questions or concerns.</p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between px-8 lg:px-20 py-10">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">What can we help you with?</h2>
          <input
            type="text"
            placeholder="Type your question here..."
            className="w-full border border-gray-300 rounded-md p-2 mb-6"
          />
          <h3 className="text-xl font-bold mb-2">FAQs</h3>
          <ul className="list-disc pl-5">
            <li>Does my card need international purchases enabled?</li>
            <li>Can I pay for my order with multiple methods?</li>
            <li>What payment method is accepted for SNKRS orders?</li>
            <li>Why don't I see Apple Pay as an option?</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 lg:pl-10 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-6">
            <li>
              <span className="font-bold">Phone:</span> 000 800 919 0566 (24/7 support)
            </li>
            <li>
              <span className="font-bold">Email:</span> support@nike.com
            </li>
            <li>
              <span className="font-bold">Chat:</span> Available 24/7
            </li>
            <li>
              <span className="font-bold">Store Locator:</span> Find Nike retail stores near you
            </li>
          </ul>
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
