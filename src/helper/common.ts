// upload image comment Image in image bb

import axios from "axios";

export const uploadImage = async (image: File) => {
  const apiKey = "6e1db85f6ab88ea2edc5847ca2be6134";
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${apiKey}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data.data.display_url;
};

// time calculation
export const isImage = (file: File): boolean => {
  return file.type.startsWith("image/");
};
