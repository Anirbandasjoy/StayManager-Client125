const RoomCardLoading = () => {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 w-full mx-auto">
      <div className="animate-pulse space-y-4">
        <div className="w-full h-48 bg-gray-300 rounded-md"></div>
        <div className="flex flex-col space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="flex justify-between items-center">
            <div className="h-3 bg-gray-300 rounded w-1/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/4"></div>
          </div>
          <div className="flex space-x-2 mt-2">
            <div className="h-4 bg-gray-300 rounded w-12"></div>
            <div className="h-4 bg-gray-300 rounded w-12"></div>
            <div className="h-4 bg-gray-300 rounded w-12"></div>
          </div>
          <div className="mt-4">
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="mt-2 flex justify-end">
            <div className="h-6 bg-gray-300 rounded w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCardLoading;
