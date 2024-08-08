import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const LogOutModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader className="mx-auto">
          <AlertDialogTitle className="text-gray-600">
            Are you absolutely sure?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="text-center mx-auto">
          <AlertDialogCancel onClick={handleCloseModal}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-red-400 hover:bg-red-500">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogOutModal;
