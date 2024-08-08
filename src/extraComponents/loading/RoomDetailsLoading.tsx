const RoomDetailsLoading = () => {
  return (
    <div className="flex gap-3 sm:flex-row flex-col-reverse">
      <div className="w-full h-[400px] mt-2 flex flex-col justify-between">
        <div>
          <div className="w-11/12 animate-pulse h-3 mb-10 bg-gray-300 rounded-sm"></div>
          <div className="space-y-2">
            <div className="w-8/12 animate-pulse h-11 bg-gray-300 rounded-sm"></div>
            <div className="w-8/12 animate-pulse h-11 bg-gray-300 rounded-sm"></div>
            <div className="w-8/12 animate-pulse h-11 bg-gray-300 rounded-sm"></div>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap">
          <div className="w-24 h-24 bg-gray-300 animate-pulse rounded-sm"></div>
          <div className="w-24 h-24 bg-gray-300 animate-pulse rounded-sm"></div>
          <div className="w-24 h-24 bg-gray-300 animate-pulse rounded-sm"></div>
        </div>
      </div>
      <div className="w-full bg-gray-300 animate-pulse h-[400px]"></div>
    </div>
  );
};

export default RoomDetailsLoading;
