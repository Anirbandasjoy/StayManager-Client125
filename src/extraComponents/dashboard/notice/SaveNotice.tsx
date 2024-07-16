"use client"
import { toast } from "@/components/ui/use-toast";
import { useSaveNoticeMutation } from "@/redux/api/baseApi";
import { LuBookmarkPlus } from "react-icons/lu";

const SaveNotice = ({noticeId} : {noticeId : string}) => {
  const [setNoticeSaveData, {data : noticeCreateResponse}] = useSaveNoticeMutation()
  const handleSaveNotice = async () => {
    try {
      await setNoticeSaveData({notice : noticeId}).unwrap()
    
      toast({
        title: "Save Done.",
      });
    } catch (error) {
       console.log(error)
       toast({
        variant: "destructive",
        title: "Alreay Save this Notice.",
        description: "There was a problem with your request.",
      });
    }
  }
  return (
    <div className="flex gap-1 items-center cursor-pointer" onClick={handleSaveNotice}>
    <LuBookmarkPlus />
     Save
  </div>
  )
}

export default SaveNotice