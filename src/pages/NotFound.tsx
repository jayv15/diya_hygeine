import React from "react";

const NotFound = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! Page not found</p>
        <a href={"/"} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;