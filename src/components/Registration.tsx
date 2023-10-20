import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your registration logic here, e.g., sending the data to a server to create a new user
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="First Name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-bold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4 col-span-2">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                required
              />
            </div>

            <div className="mb-6 col-span-2">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>

          <p className="text-sm text-gray-600">
            Already have an account?
            <Link to="/login">Log in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
