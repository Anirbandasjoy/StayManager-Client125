import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Text */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-500 flex items-center justify-center rounded-full">
              <span className="text-white text-2xl font-bold">H</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">
                CollegeHostel
              </h3>
              <p className="text-gray-500">HOSTEL</p>
            </div>
          </div>

          {/* Copyright Text */}
          <p className="text-gray-500">
            Staymanager © 2024 All Rights Reserved
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-semibold">FOLLOW US</span>
            <div className="flex space-x-2">
              <a
                href="#"
                className="w-10 h-10 bg-yellow-300 text-gray-700 hover:bg-gray-600 hover:text-white flex items-center justify-center rounded-full"
              >
                <FaTwitter className="" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-300 text-gray-700 hover:text-white hover:bg-gray-600  flex items-center justify-center rounded-full"
              >
                <FaFacebookF className="" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-300 text-gray-700 hover:text-white hover:bg-gray-600  flex items-center justify-center rounded-full"
              >
                <FaInstagram className="" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-300 text-gray-700 hover:text-white hover:bg-gray-600  flex items-center justify-center rounded-full"
              >
                <FaDribbble className="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
