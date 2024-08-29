// upload image comment Image in image bb

import axios from "axios";
// const apiKey = "6e1db85f6ab88ea2edc5847ca2be6134"; 

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

export const months = [
  { name: "January", value: "January" },
  { name: "February", value: "February" },
  { name: "March", value: "March" },
  { name: "April", value: "April" },
  { name: "May", value: "May" },
  { name: "June", value: "June" },
  { name: "July", value: "July" },
  { name: "August", value: "August" },
  { name: "September", value: "September" },
  { name: "October", value: "October" },
  { name: "November", value: "November" },
  { name: "December", value: "December" },
];

export const years = [
  { name: 2015, value: 2015 },
  { name: 2016, value: 2016 },
  { name: 2017, value: 2017 },
  { name: 2018, value: 2018 },
  { name: 2019, value: 2019 },
  { name: 2020, value: 2020 },
  { name: 2021, value: 2021 },
  { name: 2022, value: 2022 },
  { name: 2023, value: 2023 },
  { name: 2024, value: 2024 },
  { name: 2025, value: 2025 },
  { name: 2026, value: 2026 },
  { name: 2027, value: 2027 },
  { name: 2028, value: 2028 },
  { name: 2029, value: 2029 },
  { name: 2030, value: 2030 },
  { name: 2031, value: 2031 },
  { name: 2032, value: 2032 },
  { name: 2033, value: 2033 },
  { name: 2034, value: 2034 },
  { name: 2035, value: 2035 },
  { name: 2036, value: 2036 },
  { name: 2037, value: 2037 },
  { name: 2038, value: 2038 },
  { name: 2039, value: 2039 },
  { name: 2040, value: 2040 },
];

// Define a function to format a date string
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };

  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};
