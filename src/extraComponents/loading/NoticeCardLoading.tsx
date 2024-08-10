// components/PlaceholderCard.js

const NoticeCardLoading = () => {
  return (
    <div className="lg:max-w-4xl mx-auto w-full border-b border-gray-100 ">
      <div className="bg-white   p-4">
        <div className="animate-pulse">
          {/* Top Section */}
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 ml-auto"></div>
          </div>
          {/* Body Section */}
          <div className="mt-4 h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="mt-2 h-4 bg-gray-300 rounded w-1/2"></div>
          {/* Footer Section */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4">
              <div className="h-6 bg-gray-300 rounded w-10"></div>
              <div className="h-6 bg-gray-300 rounded w-10"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded w-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeCardLoading;
