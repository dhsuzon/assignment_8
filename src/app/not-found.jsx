"use client";
import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="relative flex justify-center mb-8">
          <h1 className="text-9xl font-black text-gray-100 select-none">404</h1>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl font-black text-orange-600 drop-shadow-sm">
            Oops!
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Page not found
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-500 font-medium">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved, deleted, or never existed.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-10 py-4 bg-orange-600 text-white font-bold rounded-2xl shadow-xl shadow-orange-100 hover:bg-orange-700 transition-all transform hover:scale-105 active:scale-95"
          >
            Back to Home
          </Link>

          <Link
            href="/courses"
            className="w-full sm:w-auto px-10 py-4 bg-gray-100 text-gray-900 font-bold rounded-2xl hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95"
          >
            View All Courses
          </Link>
        </div>

     
        <p className="mt-12 text-sm font-semibold text-gray-400">
          Need help?{" "}
          <Link href="/contact" className="text-orange-500 hover:underline">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
