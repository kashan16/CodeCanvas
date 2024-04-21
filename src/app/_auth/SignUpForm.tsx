"use client";

// Import required packages and components
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../services/auth';
import LoginForm from './LoginForm';

// Define SignUpForm component
const SignUpForm = () => {
  // State variables to manage form data and UI state
  const [Email, setEmail] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const [Error, setError] = useState<string>('');
  const [ShowPassword , setShowPassword] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false); // State to toggle between sign up and login forms

  // Function to handle sign up submission
  const SignUp = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, Email, Password);
      // Handle successful sign up (to be implemented)
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!ShowPassword);
  };

  // Function to toggle between sign up and login forms
  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  // Render LoginForm if showLogin is true
  if (showLogin) {
    return <LoginForm />;
  }

  // Render SignUpForm
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>

        {/* Display error message if there is any */}
        {Error && <p className="text-red-500 mb-4">{Error}</p>}

        {/* Sign Up form */}
        <form onSubmit={SignUp}>
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
            Sign Up
          </button>

          {/* Toggle to Log In */}
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <Link to="#" onClick={toggleForm} className="text-blue-500">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
