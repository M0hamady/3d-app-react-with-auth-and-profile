import React, { useState } from 'react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (activeTab === 'overview') {
      return (
        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9l-5 5-5-5" />
          </svg>
          <p className="text-lg font-semibold mt-2">$12,000.00</p>
          <p className="text-sm text-gray-600">Total Donation</p>
        </div>
      );
    } else if (activeTab === 'goal') {
      return (
        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M12 6h.01M12 14h.01"
            />
          </svg>
          <p className="text-lg font-semibold mt-2">14-month</p>
          <p className="text-sm text-gray-600">Donation Streak</p>
        </div>
      );
    } else if (activeTab === 'statistics') {
      return (
        <div>
          {/* Statistics container */}
          {/* Add your statistics content here */}
        </div>
      );
    }
  };

  return (
    <div className="font-sans leading-normal tracking-normal">
      profile
    </div>
  );
}