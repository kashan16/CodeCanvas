"use client";

// Import required packages and components
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../services/auth';
import SignUpForm from './SignUpForm';

// Define LoginForm component
const LoginForm = () => {
  // State variables to manage form data and UI state
  const [Email, setEmail] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const [Error, setError] = useState<string>('');
  const [ShowPassword , setShowPassword] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false); // State to toggle between login and signup forms

  // Function to handle login submission
  const LogIn = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, Email, Password);
      // Handle successful login (to be implemented)
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!ShowPassword);
  };

  // Function to toggle between login and signup forms
  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  // Render SignUpForm if showSignUp is true
  if (showSignUp) {
    return <SignUpForm />;
  }

  // Render LoginForm
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Log In</h1>

        {/* Display error message if there is any */}
        {Error && <p className="text-red-500 mb-4">{Error}</p>}

        {/* Login form */}
        <form onSubmit={LogIn}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="email"
              placeholder="Enter Your Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center border rounded-md">
              <input
                className="p-2 w-full rounded-md pr-10"
                type={ShowPassword ? 'text' : 'password'}
                placeholder="Enter Your Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Toggle password visibility */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="p-2 focus:outline-none absolute right-0"
              >
                <FontAwesomeIcon icon={ShowPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600"
            type="submit"
          >
            Log In
          </button>

          {/* Toggle to Sign Up */}
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <Link to="#" onClick={toggleForm} className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
