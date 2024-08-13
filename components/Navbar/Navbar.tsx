"use client";

import React, { useState } from 'react';
import { FaBell, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSignOut = () => {
    console.log("Signing out...");
    router.push('/');
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center space-x-3"
          >
            <img
              src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/karmapay-removebg-preview.png"
              alt="KarmaPay Logo"
              className="w-10 h-auto"
            />
            <p className="text-lg font-semibold text-gray-800">KarmaPay</p>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => navigateTo('/dashboard')}
            className="text-gray-600 text-sm hover:text-gray-800"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigateTo('/manage-orders')}
            className="text-gray-600 text-sm hover:text-gray-800"
          >
            Manage Orders
          </button>
          <button className="relative text-gray-600 hover:text-gray-800">
            <FaBell className="text-xl" />
          </button>
          <button 
            onClick={toggleMenu}
            className="relative text-gray-600 hover:text-gray-800"
          >
            <FaUserCircle className="text-xl" />
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button 
                  onClick={() => navigateTo('/profile')}
                  className="block w-full text-left px-3 py-2 text-gray-800 text-sm hover:bg-gray-100"
                >
                  Your Profile
                </button>
                <button 
                  onClick={() => navigateTo('/settings')}
                  className="block w-full text-left px-3 py-2 text-gray-800 text-sm hover:bg-gray-100"
                >
                  Settings
                </button>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-2 text-gray-800 text-sm hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-800">
            {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <button
            onClick={() => { navigateTo('/dashboard'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left px-4 py-2 text-gray-600 text-sm hover:bg-gray-100"
          >
            Dashboard
          </button>
          <button
            onClick={() => { navigateTo('/manage-orders'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left px-4 py-2 text-gray-600 text-sm hover:bg-gray-100"
          >
            Manage Orders
          </button>
          <button
            onClick={() => { navigateTo('/your-customers'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left px-4 py-2 text-gray-600 text-sm hover:bg-gray-100"
          >
            Your Customers
          </button>
          <button
            onClick={() => { navigateTo('/docs'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left px-4 py-2 text-gray-600 text-sm hover:bg-gray-100"
          >
            Docs
          </button>
          <button className="relative text-gray-600 hover:text-gray-800 px-4 py-2">
            <FaBell className="text-xl" />
          </button>
          <button 
            onClick={toggleMenu}
            className="relative text-gray-600 hover:text-gray-800 px-4 py-2"
          >
            <FaUserCircle className="text-xl" />
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button 
                  onClick={() => navigateTo('/profile')}
                  className="block w-full text-left px-3 py-2 text-gray-800 text-sm hover:bg-gray-100"
                >
                  Your Profile
                </button>
                <button 
                  onClick={() => navigateTo('/settings')}
                  className="block w-full text-left px-3 py-2 text-gray-800 text-sm hover:bg-gray-100"
                >
                  Settings
                </button>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-2 text-gray-800 text-sm hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
