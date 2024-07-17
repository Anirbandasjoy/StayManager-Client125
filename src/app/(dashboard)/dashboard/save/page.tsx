"use client"
import NoticeCard from "@/extraComponents/dashboard/notice/NoticeCard"
import Navbar from "@/extraComponents/dashboard/sidebar/Navbar"
import { useFindSaveNoticeQuery } from "@/redux/api/baseApi"
const Save = () => {
  const {data } = useFindSaveNoticeQuery()
  console.log(data)
  const saveNotice = data?.payload || [] 
  return (
    <div>
      <Navbar />
      <div className="md:h-[calc(100vh-100px)] h-[calc(100vh-150px)] flex flex-col gap-4 overflow-auto">
        
      {
        saveNotice?.map((notice) => (
          <NoticeCard key={notice?._id} notice={notice?.notice} />
        ))
      }
      </div>
  
    </div>
    
  )
}

export default Save