import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FcHighPriority, FcOk } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";

const BookingRequestActionModal = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <BsThreeDots className="ml-auto text-2xl cursor-pointer text-gray-600" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer flex items-center gap-1">
            <FcOk className="text-xl" />
            <h1 className="font-medium">Confrim</h1>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer flex items-center gap-1">
            <FcHighPriority className="text-xl" />
            <h1 className="font-medium">Cencel</h1>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default BookingRequestActionModal;
