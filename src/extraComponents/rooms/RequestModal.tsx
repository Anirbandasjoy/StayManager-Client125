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
  open,
  setOpen,
}: {
  roomId: string;
  sitNumber: number;
  singRoomRefetch: any;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [setData, { data, isLoading }] = useCreateBookingRequestMutation();

  const handleCreateBookingRequest = () => {
    try {
      setData({ id: roomId, sitNumber }).unwrap();
      singRoomRefetch();
      toast({
        title: "Request send done.",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Invalid Creadential.",
        description: "There was a problem with your request.",
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(data);
  return (
    <div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Can you apply to the admin for booking this room? If so, click on
              continue or cancel.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleCreateBookingRequest}
              className="bg-blue-500 hover:bg-blue-500"
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
