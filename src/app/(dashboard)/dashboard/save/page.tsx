"use client"
import Navbar from "@/extraComponents/dashboard/sidebar/Navbar"
import { useFindSaveNoticeQuery } from "@/redux/api/baseApi"
const Save = () => {
  const {data : saveNotice} = useFindSaveNoticeQuery()
  console.log(saveNotice)
  return (
    <div>
      <Navbar />
      Save page
  
    </div>
    
  )
}

export default Save