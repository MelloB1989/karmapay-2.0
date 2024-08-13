
"use client";
import { config } from '@/config'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [subdomain, setSubdomain] = useState<string>('');
  const [business_name, setBusiness_name] = useState<string>('');
  const [business_url, setBusiness_url] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleRegister = async(event: React.FormEvent) => {
    event.preventDefault();
    
    const id = toast.loading("Registering User");
    
    if (username.trim() === '' || subdomain.trim() === '' || business_name.trim() === '' || business_url.trim() === '' || password.trim() === '') {
      setError('Please fill out all fields');
      return;
    }
    try{
      await axios.post(`${config.api_url}/${config.api_v}/users/create`,{
        username: username,
        subdomain : subdomain,
        business_name : business_name,
        business_url,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-karma-admin-auth': 'ajbkbakweiuy387yeuqq@wfahdjhsabd'
        }
      })
    } catch(e){
      console.log(e)
    }
    
    toast.dismiss(id);
    toast.success("User Registered");
    // Perform registration logic here, for example, API call to register user
    //console.log('Registering with:', { username, name, business_name, business_url, password });

    // Clear form fields after registration
    setUsername('');
    setSubdomain('');
    setBusiness_name('');
    setBusiness_url('');
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
          <div className="flex flex-col">
            <label htmlFor="business_name" className="text-gray-600 text-sm">Your business_name</label>
            <input
              type="tel"
              id="business_name"
              value={business_name}
              onChange={(e) => setBusiness_name(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="business_url" className="text-gray-600 text-sm">Your business_url</label>
            <input
              type="business_url"
              id="business_url"
              value={business_url}
              onChange={(e) => setBusiness_url(e.target.value)}
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
