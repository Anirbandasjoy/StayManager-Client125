import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FcHighPriority, FcOk } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";

const BookingRequestActionModal = ({
  roomId,
  handleConfrimRequest,
  handleBookingRequestCelcel,
}: {
  roomId: string;
  handleConfrimRequest: (roomId: string) => void;
  handleBookingRequestCelcel: (roomId: string) => void;
}) => {
  const handleConfrimClick = () => {
    handleConfrimRequest(roomId);
  };
  const handleCelcelClieck = () => {
    handleBookingRequestCelcel(roomId);
  };
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
            <h1 className="font-medium" onClick={handleConfrimClick}>
              Confrim
            </h1>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer flex items-center gap-1">
            <FcHighPriority className="text-xl" />
            <h1 className="font-medium" onClick={handleCelcelClieck}>
              Cencel
            </h1>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default BookingRequestActionModal;
