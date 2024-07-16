"use client"
import { LuBookmarkPlus } from "react-icons/lu";

const SaveNotice = ({noticeId} : {noticeId : string}) => {
  const handleSaveNotice = () => {
    console.log("save",noticeId)
  }
  return (
    <div className="flex gap-1 items-center cursor-pointer" onClick={handleSaveNotice}>
    <LuBookmarkPlus />
     Save
  </div>
  )
}

export default SaveNotice