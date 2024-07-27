"use client";

import Navbar from '@/components/Navbar/Navbar';
import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa'; // Camera icon for image upload
 // Import the Navbar component

const Settings: React.FC = () => {
  // States for form inputs
  const [name, setName] = useState<string>('Zero Kart');
  const [businessName, setBusinessName] = useState<string>('ZeroKart');
  const [businessURL, setBusinessURL] = useState<string>('https://zerokart.life');
  const [subdomain, setSubdomain] = useState<string>('www.zerokart.life');
  const [kpApiKey, setKpApiKey] = useState<string>('');
  const [razorpayApiKey, setRazorpayApiKey] = useState<string>('');
  const [razorpayApiSecret, setRazorpayApiSecret] = useState<string>('');
  const [phonepeApiKeys, setPhonepeApiKeys] = useState({
    saltIndex: '',
    saltKey: '',
    merchantId: '',
    merchantUserId: '',
  });
  const [stripeApiKey, setStripeApiKey] = useState<string>('');
  const [stripeApiSecret, setStripeApiSecret] = useState<string>('');

  // Handle form submission
  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement save logic here
    console.log({
      name, businessName, businessURL, subdomain, kpApiKey, razorpayApiKey, razorpayApiSecret,
      phonepeApiKeys, stripeApiKey, stripeApiSecret
    });
  };

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the file upload here (e.g., upload to server or preview)
      console.log('Selected file:', file);
    }
  };

  // Trigger file input click
  const handleUploadClick = () => {
    document.getElementById('fileInput')?.click();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <Navbar /> {/* Add the Navbar at the top */}

      <main className="flex flex-col items-center p-4 flex-1">
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Settings</h1>
          
          <form onSubmit={handleSave} className="space-y-6">
            <div className="flex flex-col items-center mb-6">
              {/* Image Upload */}
              <div className="relative w-32 h-32 mb-4">
                <img
                  src="https://via.placeholder.com/128" // Placeholder image, replace with actual image source
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border border-gray-300"
                />
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600"
                >
                  <FaCamera className="text-lg" />
                </button>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <p className="text-gray-600">Upload a profile picture</p>
            </div>

            <div className="space-y-4">
              {/* User Details */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-600 text-sm">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="businessName" className="text-gray-600 text-sm">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="businessURL" className="text-gray-600 text-sm">Business URL</label>
                <input
                  type="url"
                  id="businessURL"
                  value={businessURL}
                  onChange={(e) => setBusinessURL(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="subdomain" className="text-gray-600 text-sm">Subdomain</label>
                <input
                  type="text"
                  id="subdomain"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <button type="button" className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6">
              Save
            </button>

            <div className="space-y-4">
              {/* API Keys */}
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your API Keys</h2>
              
              <div className="flex flex-col">
                <label htmlFor="kpApiKey" className="text-gray-600 text-sm mb-1">KarmaPay API Key</label>
                <input
                  type="text"
                  id="kpApiKey"
                  value={kpApiKey}
                  onChange={(e) => setKpApiKey(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
                <p className="text-gray-500 text-sm mt-1">We do not save KP API Key</p>
                <button className="text-blue-500 hover:underline mt-1">Generate new KP API Key</button>
              </div>
              
              <div className="flex flex-col space-y-4">
                <label className="text-gray-600 text-sm mb-1">RazorPay API Key</label>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    id="razorpayApiKey"
                    value={razorpayApiKey}
                    onChange={(e) => setRazorpayApiKey(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                    placeholder="Set API Key"
                  />
                  <input
                    type="text"
                    id="razorpayApiSecret"
                    value={razorpayApiSecret}
                    onChange={(e) => setRazorpayApiSecret(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                    placeholder="Set API Secret"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <label className="text-gray-600 text-sm mb-1">PhonePE API Key</label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="phonepeSaltIndex"
                    value={phonepeApiKeys.saltIndex}
                    onChange={(e) => setPhonepeApiKeys(prev => ({ ...prev, saltIndex: e.target.value }))}
                    className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Set Salt Index"
                  />
                  <input
                    type="text"
                    id="phonepeSaltKey"
                    value={phonepeApiKeys.saltKey}
                    onChange={(e) => setPhonepeApiKeys(prev => ({ ...prev, saltKey: e.target.value }))}
                    className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Set Salt Key"
                  />
                  <input
                    type="text"
                    id="phonepeMerchantId"
                    value={phonepeApiKeys.merchantId}
                    onChange={(e) => setPhonepeApiKeys(prev => ({ ...prev, merchantId: e.target.value }))}
                    className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Set Merchant ID"
                  />
                  <input
                    type="text"
                    id="phonepeMerchantUserId"
                    value={phonepeApiKeys.merchantUserId}
                    onChange={(e) => setPhonepeApiKeys(prev => ({ ...prev, merchantUserId: e.target.value }))}
                    className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Set Merchant User ID"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <label className="text-gray-600 text-sm mb-1">Stripe API Key</label>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    id="stripeApiKey"
                    value={stripeApiKey}
                    onChange={(e) => setStripeApiKey(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                    placeholder="Set Stripe Key"
                  />
                  <input
                    type="text"
                    id="stripeApiSecret"
                    value={stripeApiSecret}
                    onChange={(e) => setStripeApiSecret(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                    placeholder="Set Stripe Secret"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6">
              Save
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Settings;
