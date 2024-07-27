"use client";

import React, { useState } from 'react';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    if (username.trim() === '' || name.trim() === '' || phone.trim() === '' || email.trim() === '' || password.trim() === '') {
      setError('Please fill out all fields');
      return;
    }

    // Perform registration logic here, for example, API call to register user
    console.log('Registering with:', { username, name, phone, email, password });

    // Clear form fields after registration
    setUsername('');
    setName('');
    setPhone('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/karmapay-removebg-preview.png"
            alt="KarmaPay Logo"
            className="w-32 h-auto"
          />
          <p className="text-2xl font-bold text-gray-800 mt-4">KarmaPay</p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Sign up to a new account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-600 text-sm">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
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
            <label htmlFor="phone" className="text-gray-600 text-sm">Your Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 text-sm">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-600 text-sm">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Have an account yet? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
