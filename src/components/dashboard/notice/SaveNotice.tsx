// "use client";
// import { toast } from "@/components/ui/use-toast";
// import {
//   useFindSaveNoticeQuery,
//   useSaveNoticeMutation,
// } from "@/redux/api/baseApi";
// import { useEffect, useState } from "react";
// import { LuBookmarkPlus } from "react-icons/lu";

// const SaveNotice = ({ noticeId }: { noticeId: string }) => {
//   const [noticeExist, setNoticeExist] = useState<boolean>(false);
//   const [setNoticeSaveData, { isLoading: isSaving }] = useSaveNoticeMutation();
//   const {
//     data: saveNotice,
//     isFetching,
//     error,
//     refetch,
//   } = useFindSaveNoticeQuery();

//   const handleSaveNotice = async () => {
//     try {
//       await setNoticeSaveData({ notice: noticeId }).unwrap();
//       toast({
//         title: "Notice Saved Successfully!",
//       });
//       refetch();
//     } catch (error) {
//       console.error(error);
//       toast({
//         variant: "destructive",
//         title: "Already Saved.",
//         description: "You have already saved this notice.",
//       });
//     }
//   };

//   useEffect(() => {
//     if (saveNotice?.payload?.length) {
//       console.log("Effect is running: Data length exists.");
//       const findNotice = saveNotice.payload.find(
//         (notice) => notice?.notice?._id === noticeId
//       );
//       console.log("Found Notice:", findNotice);
//       setNoticeExist(!!findNotice);
//     }
//   }, [noticeId, saveNotice?.payload, isFetching, saveNotice, error]);

//   console.log("NoticeExist:", noticeExist);

//   return (
//     <>
//       {noticeExist ? (
//         <div className="flex gap-1 items-center cursor-pointer">
//           <LuBookmarkPlus />
//           Unsaved
//         </div>
//       ) : (
//         <div
//           className="flex gap-1 items-center cursor-pointer"
//           onClick={handleSaveNotice}
//         >
//           <LuBookmarkPlus />
//           Save
//         </div>
//       )}
//     </>
//   );
// };

// export default SaveNotice;
