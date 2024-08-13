// components/Inbox.js
import { Input } from "@/components/ui/input";
import React from "react";

const emails = [
  {
    sender: "William Smith",
    subject: "Meeting Tomorrow",
    preview: "Hi, let’s have a meeting tomorrow to discuss the project...",
    tags: ["meeting", "work", "important"],
    time: "10 months ago",
  },
  {
    sender: "Alice Smith",
    subject: "Re: Project Update",
    preview:
      "Thank you for the project update. It looks great! I’ve gone through...",
    tags: ["work", "important"],
    time: "10 months ago",
  },
  {
    sender: "Bob Johnson",
    subject: "Weekend Plans",
    preview: "Any plans for the weekend? I was thinking of going hiking...",
    tags: ["personal"],
    time: "over 1 year ago",
  },
  {
    sender: "Emily Davis",
    subject: "Re: Question about Budget",
    preview: "I have a question about the budget for the upcoming project...",
    tags: ["work", "budget"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
  {
    sender: "Michael Wilson",
    subject: "Important Announcement",
    preview: "I have an important announcement to make during our team...",
    tags: ["work", "important"],
    time: "over 1 year ago",
  },
];

const Notifications = () => {
  return (
    <div>
      <div className="mb-3">
        <Input placeholder="Search" className="w-full" />
      </div>
      <div className=" bg-white h-[calc(100vh-130px)] overflow-auto w-[21rem]">
        <div className="space-y-4">
          {emails.map((email, index) => (
            <div
              key={index}
              className="p-4  rounded-lg border border-gray-200 hover:bg-gray-200 transition cursor-pointer"
            >
              <div className="flex justify-between ">
                <div>
                  <h3 className="text-[16px] font-medium">{email.sender}</h3>
                  <p className="text-gray-500 text-xs">{email.subject}</p>
                </div>
                <span className=" text-gray-400 text-xs">{email.time}</span>
              </div>
              <p className="text-gray-700 mt-2 text-[14px]">{email.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
