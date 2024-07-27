"use client";

import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
; // Adjust the path as needed
import { FaCopy } from 'react-icons/fa'; // Icon for the copy action

const ProfilePage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 space-y-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Your Profile</h1>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm">Name</p>
                <p className="text-gray-800 text-sm">Zero Kart</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Email</p>
                <p className="text-gray-800 text-sm">0kart@coffeecodes.in</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Business Name</p>
                <p className="text-gray-800 text-sm">ZeroKart</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Business URL</p>
                <p className="text-gray-800 text-sm"><a href="https://zerokart.life" className="text-blue-500 hover:underline">https://zerokart.life</a></p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Subdomain</p>
                <p className="text-gray-800 text-sm">www.zerokart.life</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Subdomain Status</p>
                <p className="text-gray-800 text-sm">Not set</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Your API Keys</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <div className="flex flex-col">
                  <p className="text-gray-600 text-sm">STRIPE</p>
                  <p className="text-gray-800 text-sm">API Key Not Set</p>
                </div>
                <button className="text-blue-500 hover:text-blue-700 flex items-center space-x-1">
                  <FaCopy className="text-sm" />
                  <span className="text-sm">Copy</span>
                </button>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <div className="flex flex-col">
                  <p className="text-gray-600 text-sm">KP</p>
                  <p className="text-gray-800 text-sm">API Key Not Set</p>
                </div>
                <button className="text-blue-500 hover:text-blue-700 flex items-center space-x-1">
                  <FaCopy className="text-sm" />
                  <span className="text-sm">Copy</span>
                </button>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <div className="flex flex-col">
                  <p className="text-gray-600 text-sm">RAZORPAY</p>
                  <p className="text-gray-800 text-sm">kp_eyJrZXk****</p>
                </div>
                <button className="text-blue-500 hover:text-blue-700 flex items-center space-x-1">
                  <FaCopy className="text-sm" />
                  <span className="text-sm">Copy</span>
                </button>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <div className="flex flex-col">
                  <p className="text-gray-600 text-sm">PHONEPE</p>
                  <p className="text-gray-800 text-sm">kp_eyJzYWx****</p>
                </div>
                <button className="text-blue-500 hover:text-blue-700 flex items-center space-x-1">
                  <FaCopy className="text-sm" />
                  <span className="text-sm">Copy</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    
  );
};

export default ProfilePage;
