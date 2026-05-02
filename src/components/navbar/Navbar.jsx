import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const isLoggedIn = false; 
  const user = {
    name: "Suzon",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  };


  const Links = (
    <>
      <li>
        <Link
          href="/"
          className="text-lg font-medium hover:text-orange-500 transition-colors py-2 block"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/courses"
          className="text-lg font-medium hover:text-orange-500 transition-colors py-2 block"
        >
          Courses
        </Link>
      </li>
      {isLoggedIn && (
        <li>
          <Link
            href="/my-profile"
            className="text-lg font-medium hover:text-orange-500 transition-colors py-2 block"
          >
            My Profile
          </Link>
        </li>
      )}
    </>
  );

  return (

    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-orange-100">
      <div className="navbar container mx-auto text-gray-800 px-2 sm:px-4 md:px-8 lg:px-12">
   
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle btn-sm sm:btn-md text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
        
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-10 p-2 shadow-lg bg-white text-gray-800 rounded-box w-52 border border-orange-100"
            >
              {Links}
            </ul>
          </div>


          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent px-1 sm:px-2 whitespace-nowrap">
            SkillSphere
          </h1>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 xl:gap-4 text-gray-700">
            {Links}
          </ul>
        </div>


        <div className="navbar-end gap-2">
          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring-1 md:ring-2 ring-orange-400 ring-offset-2"
              >
                <div className="w-9 sm:w-10 rounded-full overflow-hidden">
                  <Image
                    alt="User Avatar"
                    src={user.avatar}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-gray-800 z-10 mt-3 w-48 sm:w-52 p-2 shadow-xl border border-gray-100 border-t-4 border-t-orange-500"
              >
                <li className="px-4 py-2 font-bold text-orange-600 border-b border-gray-100 mb-1 uppercase tracking-wide">
                  {user.name}
                </li>
                <li>
                  <Link href="/my-profile" className="py-2 hover:bg-orange-50">
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="py-2 hover:bg-orange-50">
                    Settings
                  </Link>
                </li>
                <li>
                  <button className="text-red-600 font-bold w-full text-left py-2 hover:bg-red-50">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/login"
                className="btn btn-warning btn-sm md:btn-md text-lg font-medium text-gray-800"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="btn btn-sm md:btn-md text-lg bg-orange-500 border-none text-white font-medium hover:bg-orange-600"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
