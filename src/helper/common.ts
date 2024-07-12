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

const  timeAgo = (date: Date): string => {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  if (secondsAgo < minute) {
      return `${secondsAgo} second${secondsAgo !== 1 ? 's' : ''} ago`;
  } else if (secondsAgo < hour) {
      const minutesAgo = Math.floor(secondsAgo / minute);
      return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  } else if (secondsAgo < day) {
      const hoursAgo = Math.floor(secondsAgo / hour);
      return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  } else if (secondsAgo < year) {
      const daysAgo = Math.floor(secondsAgo / day);
      return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
  } else {
      const yearsAgo = Math.floor(secondsAgo / year);
      return `${yearsAgo} year${yearsAgo !== 1 ? 's' : ''} ago`;
  }
}

// Example usage:
const pastDate = new Date('2022-01-01');
console.log(timeAgo(pastDate));

