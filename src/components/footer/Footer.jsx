import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-orange-100 pt-10 pb-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-2xl font-bold bg-linear-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              SkillSphere
            </h2>
            <div className="text-gray-600 space-y-2">
              <p>Email: support@skillsphere.com</p>
              <p>Phone: +880 1234 567 890</p>
              <p>Location: Sylhet, Bangladesh</p>
            </div>
          </div>

   
          <div className="flex justify-center items-center flex-col gap-4">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">
              Legal & Policy
            </h3>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:text-white hover:bg-orange-500 transition-all"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:text-white hover:bg-orange-500 transition-all"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:text-white hover:bg-orange-500 transition-all"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:text-white hover:bg-orange-500 transition-all"
              >
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
