"use client";
import Link from "next/link";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">
            User <span className="text-orange-600">Login</span>
          </h2>
          <p className="text-gray-400 font-medium">
            Welcome back! Please enter your details.
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-500 ml-2">
              Email Address
            </label>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-5 text-orange-500" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-50 transition-all outline-none text-gray-700 font-medium"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-500 ml-2">
              Password
            </label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-5 text-orange-500" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-50 transition-all outline-none text-gray-700 font-medium"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-3 mt-4 group"
          >
            Login{" "}
            <FaSignInAlt className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        <p className="text-center mt-8 text-gray-500 text-sm font-medium">
          Don't have an account?
          <Link href="/register" className="text-orange-600 font-bold cursor-pointer hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
