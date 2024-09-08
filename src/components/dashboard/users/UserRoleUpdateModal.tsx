"use state";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSingleUserQuery } from "@/redux/api/baseApi";
import { useState } from "react";

const UserRoleUpdateModal = ({
  open,
  setOpen,
  userId,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  userId: string;
}) => {
  const { refetch: singleUserRefetch } = useSingleUserQuery({
    profileId: userId,
  });
  const [role, setRole] = useState<string>("");
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    setRole(value);
  };

  const updateUserRole = async () => {
    console.log({ role, userId });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader className="mx-auto">
          <AlertDialogTitle className="text-gray-600">
            Chnage user role
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div>
          <Select onValueChange={handleChange}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <AlertDialogFooter className="text-center mx-auto">
          <AlertDialogCancel onClick={handleCloseModal}>
            Cancel
          </AlertDialogCancel>
          {role ? (
            <AlertDialogAction className="" onClick={updateUserRole}>
              <Button>Update</Button>
            </AlertDialogAction>
          ) : (
            <div>
              <Button disabled className="bg-gray-500">
                Update
              </Button>
            </div>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UserRoleUpdateModal;
