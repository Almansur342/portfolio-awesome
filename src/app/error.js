"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-6">
      <div className="max-w-md w-full text-center bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-700 mb-6">
          We encountered an unexpected error. Please try again, or contact
          support if the problem persists.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
