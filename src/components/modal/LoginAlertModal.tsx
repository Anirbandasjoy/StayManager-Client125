import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

const LoginAlertModal = ({
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
          <AlertDialogTitle className="text-gray-600 dark:text-gray-200">
            Please make sure you logged In?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="text-center mx-auto">
          <AlertDialogCancel onClick={handleCloseModal}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-red-400 hover:bg-red-500 dark:bg-zinc-950 dark:border dark:border-gray-700 dark:text-white">
            <Link href="/login">Login</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoginAlertModal;
