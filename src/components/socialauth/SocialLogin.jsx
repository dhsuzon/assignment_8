"use client";
import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", 
      });
    } catch (error) {
      toast.error("Google authentication failed!");
      console.error(error);
    }
  };

  return (
    <div className="mt-8">
      <div className="divider text-gray-400 text-xs font-bold uppercase tracking-widest">
        OR
      </div>

      <button
        onClick={handleGoogleLogin}
        type="button"
        className="w-full mt-4 flex items-center justify-center gap-3 bg-white border-2 border-gray-100 py-4 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 hover:border-orange-200 transition-all shadow-sm active:scale-95"
      >
        <FaGoogle className="text-red-500" size={22} />
        <span className="text-lg">Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
