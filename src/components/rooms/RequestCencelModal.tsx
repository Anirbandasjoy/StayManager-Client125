import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "@/components/ui/use-toast";
import {
  useCencelRequestMutation,
  useFindAllBookingRequestQuery,
} from "@/redux/api/baseApi";

const RequestCencelModal = ({
  roomId,
  sitNumber,
  singRoomRefetch,
  roomBookingExistRefetch,
  open,
  setOpen,
}: {
  roomId: string;
  sitNumber: number;
  singRoomRefetch: any;
  roomBookingExistRefetch: any;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [setData, { data, isLoading }] = useCencelRequestMutation();
  const { refetch: bookingRefetch } = useFindAllBookingRequestQuery();

  const handleRequestCencel = async () => {
    try {
      console.log(sitNumber);
      await setData({ id: roomId, sitNumber }).unwrap();
      roomBookingExistRefetch();
      singRoomRefetch();
      bookingRefetch();
      toast({
        title: "Request sent successfully.",
      });
    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error?.data?.message || "There was a problem with your request.",
      });
    }
  };

  console.log({ bookingdatsdfdsfdsf: data });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Do you want to send a booking request to the admin for this room?
              If so, click continue or cancel.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleRequestCencel}
              className="bg-red-400 hover:bg-red-500"
            >
              {isLoading ? "Loading..." : "Confrim"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default RequestCencelModal;
