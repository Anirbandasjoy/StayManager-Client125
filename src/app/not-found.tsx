"use client";
import { useRouter } from "next/navigation";
import { FaExclamationCircle } from "react-icons/fa";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FaExclamationCircle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-2xl font-semibold my-4 dark:text-gray-300">
        404 - Not Found
      </h1>
      <p className="text-gray-600">
        The page you are looking for doesnt exist.
      </p>
      <div
        onClick={() => router.back()}
        className="text-blue-500 cursor-pointer hover:underline mt-4"
      >
        Go Backwards
      </div>
    </div>
  );
};

export default NotFound;
