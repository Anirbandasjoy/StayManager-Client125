import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const DeleteModal = ({
  open,
  setOpen,
  onConfrim,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfrim: any;
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
          <AlertDialogAction
            className="bg-red-400 hover:bg-red-500"
            onClick={onConfrim}
          >
            Confrim
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
