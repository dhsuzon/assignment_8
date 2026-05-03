"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );

  if (!user)
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 font-bold">
        Please login to view profile.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* Banner Section */}
        <div className="h-32 bg-gradient-to-r from-orange-500 to-yellow-400"></div>

        <div className="px-8 pb-10">
          {/* Profile Image */}
          <div className="relative flex justify-center sm:justify-start">
            <div className="absolute -top-16 w-32 h-32 rounded-3xl border-4 border-white shadow-lg overflow-hidden bg-white">
              <Image
                src={
                  user?.image ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                alt="Profile"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="mt-20 text-center sm:text-left">
            {/* Name and Email */}
            <h1 className="text-4xl font-black text-gray-900 leading-tight">
              {user?.name}
            </h1>
            <p className="text-gray-500 font-medium text-lg">{user?.email}</p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
              <span className="px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold uppercase tracking-wider">
                Full-Stack Developer
              </span>
              <span className="px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-bold uppercase tracking-wider">
                Active Member
              </span>
            </div>

            <div className="divider my-8"></div>

            {/* Profile Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
                  Full Name
                </p>
                <p className="text-xl font-bold text-gray-800">{user?.name}</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
                  Email Address
                </p>
                <p className="text-xl font-bold text-gray-800">{user?.email}</p>
              </div>
            </div>

            {/* Action Button - Redirects to Update Route */}
            <div className="mt-10">
              <Link
                href="/my-profile/update"
                className="btn bg-orange-500 hover:bg-orange-600 border-none text-white font-bold px-10 rounded-xl shadow-lg shadow-orange-100 text-lg transition-all transform hover:scale-105"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
