"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Lottie from "lottie-react";
import contactAnimation from "../../../statics/animation/animationc.json";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
    toast({
      title: "Message send",
    });
  };
  return (
    <section className="relative flex  items-center justify-center min-h-screen bg-gradient-to-b from-purple-300 to-gray-100 dark:to-[#111827]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-zinc-950 rounded-3xl shadow-lg flex flex-col-reverse sm:flex-row gap-8 sm:gap-0 w-[900px] max-w-full p-10"
      >
        {/* Form Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Lets talk</h2>
          <p className="text-gray-500 mb-8 dark:text-gray-400">
            If you would like to connect with our team, please fill out this
            form and we will try to connect with you as soon as possible.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-zinc-950 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-300 outline-none"
              />
              {errors.name?.message &&
                typeof errors.name.message === "string" && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
            </div>

            {/* Email Input */}
            <div>
              <input
                type="text"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-2 rounded-md dark:bg-zinc-950 bg-gray-100 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-300 outline-none"
              />
              {errors.email?.message &&
                typeof errors.email.message === "string" && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>

            {/* Message Input */}
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-2 rounded-md dark:bg-zinc-950 bg-gray-100 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-300 outline-none"
              ></textarea>
              {errors.message?.message &&
                typeof errors.message.message === "string" && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="space-y-6 text-gray-600 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Lottie
                animationData={contactAnimation}
                loop={true}
                height={100}
              />
            </motion.div>

            <div className="text-sm dark:text-gray-400">
              <p>36 Sukrabad Dhaka</p>
              <p>+880 1772 838734</p>
              <p>staymanager@gmail.com</p>
            </div>

            <div className="flex justify-center space-x-4">
              {/* Social Icons */}
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-700">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
