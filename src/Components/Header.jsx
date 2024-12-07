import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img
            src="logo.png" // Replace with the actual logo
            alt="MCD Logo"
            className="h-12 mr-4"
          />
          <h1 className="text-xl font-bold">Municipal Corporation of Delhi</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-blue-700 px-3 py-1 rounded">Screen Reader Access</button>
          <select className="bg-blue-600 text-white px-3 py-1 rounded">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
