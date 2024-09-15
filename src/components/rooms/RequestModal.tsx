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
import { useCreateBookingRequestMutation } from "@/redux/api/baseApi";

const RequestModal = ({
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
  const [setData, { data, isLoading }] = useCreateBookingRequestMutation();

  const handleCreateBookingRequest = async () => {
    try {
      await setData({ id: roomId, sitNumber }).unwrap();
      roomBookingExistRefetch();
      singRoomRefetch();
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
              onClick={handleCreateBookingRequest}
              className="bg-blue-500 hover:bg-blue-600"
            >
              {isLoading ? "Loading..." : "Continue"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default RequestModal;
