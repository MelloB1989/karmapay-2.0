"use client";

import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setError('Please enter both email and password');
      return;
    }

    // Perform login logic here, for example, API call to authenticate user
    console.log('Logging in with:', { email, password });

    // Clear form fields after login
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://noobsverse-internal.s3.ap-south-1.amazonaws.com/karmapay-removebg-preview.png"
            alt="Logo"
            className="w-32 h-auto"
          />
          <p className="text-2xl font-bold text-gray-800 mt-4">KarmaPay</p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Have you registered? <a href="/register" className="text-blue-500 hover:underline">Create a new account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
