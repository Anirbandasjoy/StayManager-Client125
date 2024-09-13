"use client";
import { motion } from "framer-motion";
import { facilities } from "@/helper/common";
import { containerVariants, itemVariants } from "@/components/animation/list";

const Facilities = () => {
  return (
    <motion.div
      className="py-12 px-0 container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-400 mb-1 ">Facilities</h2>
        <p className="text-gray-600 text-[14px] dark:text-gray-400">
          What we offer for free
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {facilities.map((facility) => (
          <motion.div
            key={facility.name}
            className="text-center"
            variants={itemVariants}
          >
            <div className="w-20 h-20 mx-auto flex items-center cursor-pointer hover:text-white hover:scale-110 hover:animate-bounce transform justify-center hover:bg-gray-600 bg-yellow-300 rounded-full text-3xl">
              {facility.icon}
            </div>
            <p className="mt-2 dark:text-gray-400 text-lg font-medium cursor-pointer text-gray-700 hover:text-red-400">
              {facility.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Facilities;
