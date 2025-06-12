import React, { useState } from 'react';

const Login = () => {
  const [activeTab, setActiveTab] = useState('student'); // 'student' or 'franchise'
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Mock endpoints, replace with your real API URLs
    const endpoint = activeTab === 'student'
      ? 'https://jsonplaceholder.typicode.com/posts/student-login'
      : 'https://jsonplaceholder.typicode.com/posts/franchise-login';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, password })
      });
      if (response.ok) {
        // Mock: Assume success, handle token/redirect here
        setError('');
        alert('Login successful!');
        // window.location.href = '/dashboard'; // or use navigate()
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7fb] flex flex-col items-center justify-start py-8 px-2 mt-12" style={{ fontFamily: 'Inter, sans-serif' }}>
      <h2 className="text-3xl font-bold text-[#280E5C] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Login</h2>
      <p className="text-gray-700 mb-6 text-base">Please log in to access your dashboard, courses, certificates, and services.</p>

        {/* Tab Buttons */}
      <div className="flex justify-center mb-6 gap-0.5">
          <button
          className={`px-6 py-2 rounded-l-full text-base font-semibold border border-[#280E5C] ${activeTab === 'student' ? 'bg-[#280E5C] text-white' : 'bg-white text-[#280E5C]'} transition-colors duration-200`}
            onClick={() => setActiveTab('student')}
          style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Student Login
          </button>
          <button
          className={`px-6 py-2 rounded-r-full text-base font-semibold border border-[#280E5C] border-l-0 ${activeTab === 'franchise' ? 'bg-[#280E5C] text-white' : 'bg-white text-[#280E5C]'} transition-colors duration-200`}
            onClick={() => setActiveTab('franchise')}
          style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Franchise Login
          </button>
        </div>

        {/* Login Form */}
      <div className="flex justify-center mt-8 w-full">
        <div className="bg-white border border-[#280E5C] rounded-lg p-8 w-full max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="userId" className="block text-left text-base text-[#280E5C] mb-1 font-medium">Enter User ID</label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={e => setUserId(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#280E5C] text-base"
                required
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-left text-base text-[#280E5C] mb-1 font-medium">Enter Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-[#280E5C] text-base"
                required
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
            {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
            <button
              type="submit"
              className="px-8 py-2 bg-[#280E5C] text-white rounded-md text-base font-semibold hover:bg-[#3b2d71] transition-colors duration-200 mt-2 disabled:opacity-60"
              style={{ fontFamily: 'Inter, sans-serif' }}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; 