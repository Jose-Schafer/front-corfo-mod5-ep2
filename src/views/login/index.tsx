import React, { useState } from 'react';
import { useNavigate } from 'react-router'
import { Input } from "@/components/ui/input"

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {

    // This should be changed to be validated on the backend or Auth Provider
    if (username === 'admin' && password === 'admin') {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.1sBNVFZs67RWole33uQsvAoo4yt-WJmMF9bGh-TTL4w';
      localStorage.setItem('auth-token', token);
      alert('Login successful!');
      navigate("/");

    } else if (username == 'user' && password == 'user') {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiVXNlciJ9.bBlJzzxMMG10s4cxuUHUyFPJ2i2BW4ogPR_NjCZPwi4';
      localStorage.setItem('auth-token', token);
      alert('Login successful!');
      navigate("/");
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-semibold">Username</label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold">Password</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};
