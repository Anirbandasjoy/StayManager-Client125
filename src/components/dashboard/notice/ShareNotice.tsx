import { toast } from "@/components/ui/use-toast";
import {
  useDeleteSaveNoticeMutation,
  useFindSaveNoticeQuery,
  useSaveNoticeMutation,
} from "@/redux/api/baseApi";
import { useEffect, useState } from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { LuBookmarkPlus } from "react-icons/lu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ShareNotice = ({ noticeId }: { noticeId: string }) => {
  const [noticeExist, setNoticeExist] = useState<boolean>(false);
  const [setNoticeSaveData, { isLoading: isSaving }] = useSaveNoticeMutation();
  const [setSaveDelete, { data: saveDelete, isLoading }] =
    useDeleteSaveNoticeMutation();
  const {
    data: saveNotice,
    isFetching,
    error,
    refetch,
  } = useFindSaveNoticeQuery();

  const handleSaveNotice = async () => {
    try {
      await setNoticeSaveData({ notice: noticeId }).unwrap();
      toast({
        title: "Notice Saved Successfully!",
      });
      refetch();
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Already Saved.",
        description: "You have already saved this notice.",
      });
    }
  };

  useEffect(() => {
    if (saveNotice?.payload?.length) {
      console.log("Effect is running: Data length exists.");
      const findNotice = saveNotice.payload.find(
        (notice) => notice?.notice?._id === noticeId
      );
      console.log("Found Notice:", findNotice);
      setNoticeExist(!!findNotice);
    }
  }, [noticeId, saveNotice?.payload, isFetching, saveNotice, error]);

  console.log("NoticeExist:", noticeExist);

  const handleUnSavedNotice = async () => {
    try {
      await setSaveDelete({ noticeId }).unwrap();
      toast({
        title: "Deleted!",
      });
      refetch();
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Somthing was wrong.",
        description: "Not Deleted your saved notice.",
      });
    }
  };
  console.log(saveDelete);
  return (
    <div>
      {noticeExist ? (
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="flex gap-1 items-center cursor-pointer">
              <BsBookmarkPlusFill className="text-lg text-gray-500" />
              <h1 className="text-sm">Saved</h1>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleUnSavedNotice}>
                {isLoading ? "Deleting..." : "Confrim"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <div
          className="flex gap-1 items-center cursor-pointer"
          onClick={handleSaveNotice}
        >
          <LuBookmarkPlus className="text-lg" />
          <h1>
            {isSaving ? <span className="text-sm">Saving...</span> : "Save"}
          </h1>
        </div>
      )}
    </div>
  );
};

export default ShareNotice;
