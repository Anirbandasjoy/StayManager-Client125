import { useState, useEffect } from "react";
import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInYears,
} from "date-fns";

interface TimeAgoProps {
  date: string | Date;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ date }) => {
  const [timeAgo, setTimeAgo] = useState(() => formatTimeAgo(new Date(date)));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(formatTimeAgo(new Date(date)));
    }, 60000);

    return () => clearInterval(interval);
  }, [date]);

  return timeAgo;
};

const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const minutes = differenceInMinutes(now, date);
  const hours = differenceInHours(now, date);
  const days = differenceInDays(now, date);
  const weeks = differenceInWeeks(now, date);
  const years = differenceInYears(now, date);

  if (minutes < 1) {
    return "Just now";
  } else if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else if (days < 7) {
    return `${days}d ago`;
  } else if (weeks < 52) {
    return `${weeks}w ago`;
  } else {
    return `${years}y ago`;
  }
};

export default TimeAgo;
