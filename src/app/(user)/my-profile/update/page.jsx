"use client";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UpdateProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.updateUser({
        name: name,
        image: image,
      });

      toast.success("Profile updated successfully!");
      router.push("/my-profile"); 
      router.refresh(); 
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900">
            Update Profile
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            Update your profile name and image URL
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-gray-700">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full h-14 rounded-2xl focus:outline-orange-500 font-semibold text-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-gray-700">
                Profile Image URL
              </span>
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full h-14 rounded-2xl focus:outline-orange-500 font-semibold text-base"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="btn flex-1 bg-orange-600 hover:bg-orange-700 border-none text-white font-bold h-14 rounded-2xl text-lg shadow-lg shadow-orange-100 transition-all"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Update profile"
              )}
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              className="btn flex-1 bg-gray-100 hover:bg-gray-200 border-none text-gray-600 font-bold h-14 rounded-2xl text-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
