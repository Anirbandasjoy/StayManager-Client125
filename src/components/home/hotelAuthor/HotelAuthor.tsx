import Image from "next/image";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const HotelAuthor = () => {
  return (
    <div className="mt-52 container ">
      <div className="mb-5">
        <h2 className="text-3xl font-bold text-red-400 mb-1">Hostel Author</h2>
        <p className="text-gray-600 text-[14px]">
          Direct contact with the hostel author
        </p>
      </div>

      <div className="flex flex-col md:flex-row bg-[#fef08ac5] rounded-r-full h-auto md:h-[300px] w-full md:w-9/12  relative p-4 md:p-8">
        <div className="w-full md:w-6/12 text-gray-600">
          <h1 className="text-2xl font-medium mb-2">Joy Das</h1>
          <p className="mb-2">
            Address: 123 Hostel St, Moulvibazar, Bangladesh
          </p>
          <p className="mb-2">Phone: +880 1772 838734</p>
          <p className="mb-4">Email: joy600508@gmail.com</p>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              <FaInstagram />
            </a>
            <a
              href="https://threads.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:joy@example.com"
              className="text-red-600 hover:text-red-800"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="w-full md:w-6/12 flex justify-center md:justify-end">
          <Image
            src="https://i.ibb.co/rcrzL7P/Whats-App-Image-2024-09-02-at-7-01-29-PM-removebg-preview-1.png"
            width={177}
            height={177}
            alt="authorImage"
            className="max-w-full h-auto md:absolute md:bottom-0 md:right-28 "
          />
        </div>
      </div>
    </div>
  );
};

export default HotelAuthor;
