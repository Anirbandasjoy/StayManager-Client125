import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "@/components/ui/use-toast";
import { useLogOutMutation } from "@/redux/api/baseApi";
import { useRouter } from "next/navigation";

const LogOutModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const router = useRouter();
  const handleCloseModal = () => {
    setOpen(false);
  };

  const [logOut] = useLogOutMutation();

  const handleLogOut = async () => {
    try {
      await logOut().unwrap();
      handleCloseModal();
      toast({
        title: "Logout Successfully.",
      });
      router.push("/login");
      localStorage.removeItem("location");
    } catch (error) {
      console.error("Logout failed: ", error);
      toast({
        variant: "destructive",
        title: "Invalid Creadential.",
        description: "There was a problem with your request.",
      });
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader className="mx-auto">
          <AlertDialogTitle className="text-gray-600 dark:text-gray-200">
            Are you absolutely sure?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="text-center mx-auto">
          <AlertDialogCancel onClick={handleCloseModal}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-400 hover:bg-red-500 dark:bg-zinc-950 dark:border dark:border-gray-700 dark:text-white"
            onClick={handleLogOut}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogOutModal;
