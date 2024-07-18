import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/extraComponents/dashboard/sidebar/Navbar";
import { BiSolidCloudUpload } from "react-icons/bi";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-8 items-end">
        <div className="mt-5 w-6/12">
          <h1 className="text-lg font-semibold">Post Notice</h1>
          <Textarea className="border-2 border-gray-300 mt-1 resize-none" />
        </div>
        <div className=" bg-gray-100 w-2/12 border-2 rounded-md h-[107px] cursor-pointer border-gray-300 flex justify-center items-center">
          <BiSolidCloudUpload className="text-4xl text-gray-300 " />
        </div>
      </div>
      <div className="mt-6 space-x-3 ml-[136px]">
        <Button variant="outline">Discard</Button>
        <Button>Save Post</Button>
      </div>
    </div>
  );
};

export default page;
