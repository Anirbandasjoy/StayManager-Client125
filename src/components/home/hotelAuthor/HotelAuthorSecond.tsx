import Image from "next/image";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const HotelAuthorSecondPerson = () => {
  return (
    <div className="mt-32 container  ">
      <div className="flex flex-col dark:bg-zinc-950 dark:text-white dark:border dark:border-gray-700  md:flex-row ml-auto bg-[#f87171ce] sm:rounded-l-full h-auto md:h-[300px] w-full md:w-9/12  relative sm:p-4 p-7 rounded-sm sm:gap-0 gap-5 md:p-8">
        <div className="w-full md:w-6/12 flex  ">
          <Image
            src="https://i.ibb.co/KyLG8G1/Whats-App-Image-2024-09-04-at-10-30-13-AM-removebg-preview.png"
            width={320}
            height={320}
            alt="authorImage"
            className="max-w-full h-auto md:absolute md:bottom-0 md:left-28 "
          />
        </div>

        <div className="w-full md:w-6/12 text-gray-600 dark:text-gray-400 text-right ">
          <h1 className="text-2xl font-medium mb-2">Sakib Talukdar</h1>
          <p className="mb-2 ">
            Address: 123 Hostel St, Moulvibazar, Bangladesh
          </p>
          <p className="mb-2">Phone: +880 1772 838734</p>
          <p className="mb-4">Email: sakibtalukdar@gmail.com</p>
          <div className="flex justify-end items-center">
            <div className="flex space-x-4 text-2xl  ">
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
        </div>
      </div>
    </div>
  );
};

export default HotelAuthorSecondPerson;
