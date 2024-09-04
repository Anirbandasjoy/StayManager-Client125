// upload image comment Image in image bb
import axios from "axios";

export const uploadImage = async (image: File) => {
  if (!image) {
    console.log("Image File Not Found");
  }

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
export const facilities = [
  { name: "Tea & Coffee", icon: "☕" },
  { name: "Hot Showers", icon: "🚿" },
  { name: "Laundry", icon: "🧺" },
  { name: "Kitchen", icon: "🍽" },
  { name: "Air Conditioner", icon: "❄️" },
  { name: "Lockers", icon: "🔒" },
  { name: "24/7 Reception", icon: "🔔" },
  { name: "Free Wi-Fi", icon: "📶" },
  { name: "TV", icon: "📺" },
  { name: "City Map", icon: "🗺️" },
  { name: "Hairdryer", icon: "💇" },
  { name: "Iron", icon: "🧳" },
];

export const gallery = [
  {
    image:
      "https://i.ibb.co/cF11Z1k/kipras-streimikis-U2f-PDs0-2i-I-unsplash.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFB...",
  },

  {
    image: "https://i.ibb.co/RpkCCDL/zhang-kenny-c-Xz-Br1q6h4o-unsplash.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFB...",
  },
  {
    image:
      "https://i.ibb.co/gJS6Jds/frames-for-your-heart-Fqqi-Av-Jejto-unsplash.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFB...",
  },
  {
    image: "https://i.ibb.co/H7kYtmJ/hannah-busing-7-pg2hoh-Q-k-unsplash.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFB...",
  },
  {
    image:
      "https://i.ibb.co/pbvWYJN/bernard-hermant-c4-Ccpa8s-Ml-I-unsplash.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFB...",
  },
  {
    image: "https://i.ibb.co/3WG2ZWw/naomi-hebert-2dc-Yhvb-HV-M-unsplash.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFB...",
  },
  {
    image: "https://i.ibb.co/RpkCCDL/zhang-kenny-c-Xz-Br1q6h4o-unsplash.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFB...",
  },
  {
    image: "https://i.ibb.co/H7kYtmJ/hannah-busing-7-pg2hoh-Q-k-unsplash.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFB...",
  },
  {
    image:
      "https://i.ibb.co/cF11Z1k/kipras-streimikis-U2f-PDs0-2i-I-unsplash.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFB...",
  },
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
