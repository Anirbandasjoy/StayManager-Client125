"use client";
import { motion } from "framer-motion";
import { gallery } from "@/helper/common";
import Image from "next/image";
import React, { useState } from "react";
import ShowRoomImage from "./ShowRoomImage";
import { containerVariants, itemVariants } from "@/components/animation/list";

const Gallery = () => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const handleClicked = (image: string) => {
    setShow(true);
    setSelectedImage(image);
    console.log({ show, image });
  };
  return (
    <motion.div
      className="container mx-auto mt-20 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ShowRoomImage show={show} setShow={setShow} image={selectedImage} />
      <div className="mb-3">
        <h2 className="text-3xl font-bold text-red-400 mb-1">Gallery</h2>
        <p className="text-gray-600 text-[14px] dark:text-gray-400">
          See our all rooms
        </p>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {gallery.map((imageURL, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="mb-4 overflow-hidden rounded-lg  cursor-pointer  "
            onClick={() => handleClicked(imageURL?.image)}
          >
            <Image
              src={imageURL?.image}
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              alt={`gallery-image-${index}`}
              className="rounded-lg hover:scale-125 duration-500 transition transform"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
