import React from "react";
import { DateTimeFormatOptions } from "../type";

// FormatDate function to format the date string
const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "";

  const options: DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

type DateComponentProps = {
  dateString: string;
};

const DateComponent: React.FC<DateComponentProps> = ({ dateString }) => {
  const formattedDate = formatDate(dateString);

  return (
    <div>
      <span>{formattedDate}</span>
    </div>
  );
};

export default DateComponent;
