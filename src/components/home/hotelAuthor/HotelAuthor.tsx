import Image from "next/image";
import myImage from "../../../statics/images/joy.png";
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
        <h2 className="text-3xl font-bold text-red-400 dark:text-gray-100 mb-1">
          Hostel Author
        </h2>
        <p className="text-gray-600 text-[14px] dark:text-gray-400">
          Direct contact with the hostel author
        </p>
      </div>

      <div className="flex flex-col-reverse rounded-sm  md:flex-row dark:bg-zinc-950 dark:text-white dark:border dark:border-gray-700 bg-[#fef08ac5] sm:rounded-r-full h-auto md:h-[300px] w-full md:w-9/12  relative p-7 sm:p-4 md:p-8">
        <div className="w-full md:w-6/12 text-gray-600 dark:text-gray-400">
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
              href="mailto:joy@example.com"
              className="text-red-600 hover:text-red-800"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="w-full md:w-6/12 flex justify-center md:justify-end">
          <Image
            src={myImage}
            width={500}
            height={500}
            alt="authorImage"
            className="max-w-full h-auto md:absolute md:bottom-0 md:right-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default HotelAuthor;
