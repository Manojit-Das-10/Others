import React from 'react';
import { FaFacebook , FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from 'react-router-dom';  

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">

      {/* Left side illustration */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
        <div className="text-center">

          <h1 className="text-3xl font-bold mt-4 text-blue-900">ONLINE EDUCATION IS <br /> NOW SIMPLE</h1>

          <img 
            src="./studyicon.png" 
            alt="Online Education Illustration"
            className="max-w-xs mt-3"
          />
          
        </div>
      </div>

      {/* Right side login form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Welcome</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Type Username"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-700">Remember Login</label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Log In
            </button>
          </form>
          <div className="my-4 text-center text-gray-500">OR</div>
          <div className="flex justify-center space-x-4">
            <button className=" p-2">
              <FaFacebook className='text-blue-500 h-7 w-7'/>  
            </button>
            <button className="p-2">
            <BiLogoGmail className='text-red-500 h-7 w-7' />
            </button>
            <button className=" p-2">
              <FaTwitter  className='text-blue-500 h-7 w-7'/> 
            </button>
          </div>
          <div className="mt-6 text-center text-sm">
            <p>Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
