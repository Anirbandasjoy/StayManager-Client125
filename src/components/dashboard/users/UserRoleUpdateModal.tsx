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
import { toast } from "@/components/ui/use-toast";
import {
  useAllUserQuery,
  useSingleUserQuery,
  useUpdateUserRoleMutation,
} from "@/redux/api/baseApi";
import { useEffect, useState } from "react";

const UserRoleUpdateModal = ({
  open,
  setOpen,
  userId,
  alluserRefetch,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  userId: string;
  alluserRefetch: any;
}) => {
  const { data: singleUser } = useSingleUserQuery({
    profileId: userId,
  });

  const [setRoleUpdate, { isLoading }] = useUpdateUserRoleMutation();
  const [role, setRole] = useState<string>("");
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    setRole(value);
  };

  const updateUserRole = async () => {
    try {
      await setRoleUpdate({ userId, role }).unwrap();
      alluserRefetch();
      toast({
        title: "Role was updated",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Not updated role.",
        description: "There was a problem with your request.",
      });
    }
  };
  useEffect(() => {
    if (singleUser?.payload) {
      setRole(singleUser?.payload?.role);
    }
  }, [singleUser?.payload]);

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
              <SelectValue
                placeholder={singleUser && singleUser?.payload?.role}
              />
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
          <AlertDialogAction className="" onClick={updateUserRole}>
            <Button className="cursor-pointer">
              {isLoading ? "Loading..." : "Update"}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UserRoleUpdateModal;
