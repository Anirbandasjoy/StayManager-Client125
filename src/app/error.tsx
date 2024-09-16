/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        Oops! Something went wrong.
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        We're sorry for the inconvenience. Please try again or contact support
        if the issue persists.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
      >
        Try Again
      </button>
    </div>
  );
}
