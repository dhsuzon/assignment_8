"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    await authClient.signIn.email(
      {
        email,
        password,
      },{
        onSuccess: () => {
          setLoading(false);
          router.push("/"); 
          router.refresh();
        },
        onError: (ctx) => {
          setLoading(false);
          toast.error(ctx.error.message || "Invalid email or password", {
            id: "login-toast",
          });
        },
      },
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-gray-100">
        {/* Title */}
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
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:border-orange-500 focus:bg-white transition-all outline-none text-gray-700 font-medium shadow-sm"
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
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-transparent rounded-2xl focus:border-orange-500 focus:bg-white transition-all outline-none text-gray-700 font-medium shadow-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 text-gray-400 hover:text-orange-500 transition-colors"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg flex items-center justify-center gap-3 mt-4 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying..." : "Login"}
            {!loading && (
              <FaSignInAlt className="group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </form>
        <p className="text-center mt-8 text-gray-500 text-sm font-medium">
          Do not have an account?{" "}
          <Link
            href="/register"
            className="text-orange-600 font-bold hover:underline ml-1"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
