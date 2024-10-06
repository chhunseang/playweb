import React from 'react';

const NameAgeDisplay = () => {
  const name = "CHHUNSEANG";
  const age = 30; // Replace with your actual age

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="text-center">
        <div className="inline-block border-4 border-gray-700 p-4 mb-6">
          <h1 className="text-4xl font-bold font-serif" style={{ fontFamily: "'Times New Roman', Times, serif" }}>My Portfolio</h1>
        </div>
        <p className="text-2xl">{name}</p>
        <p className="text-2xl">Age: {age}</p>
      </div>
    </div>
  );
};

export default NameAgeDisplay;
