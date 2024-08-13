"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { config } from '@/config';
import { toast } from 'react-toastify';
import { login } from '@/lib/functions';

export default function Login() {
  const [username, setusername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async(event: React.FormEvent) => {
    event.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password');
      return;
    }

    const id = toast.loading("Registering User");
    // Perform login logic here, for example, API call to authenticate user
    //console.log('Logging in with:', { username, password });
    try{
      // await axios.post(`${config.api_url}/${config.api_v}/users/login`,{
      //   username,
      //   password
      // }, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'x-karma-admin-auth': 'ajbkbakweiuy387yeuqq@wfahdjhsabd'
      //   }
      // })
      await login(username, password);
    } catch(e){
      console.log(e)
    }
    
    toast.dismiss(id);
    toast.success("User Registered");
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
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-600">Username</label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
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
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleLogin}>Login</button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Have you registered? <a href="/register" className="text-blue-500 hover:underline">Create a new account</a>
        </p>
      </div>
    </div>
  );
};
