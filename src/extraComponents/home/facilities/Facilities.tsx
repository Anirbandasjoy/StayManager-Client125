import { facilities } from "@/helper/common";

const Facilities = () => {
  return (
    <div className="py-12 container">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-2">Facilities</h2>
        <p className="text-gray-600">What we offer for free</p>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {facilities.map((facility) => (
          <div key={facility.name} className="text-center">
            <div className="w-20 h-20 mx-auto flex items-center hover:delay-200 cursor-pointer hover:text-white justify-center hover:bg-gray-600 bg-yellow-300 rounded-full text-3xl">
              {facility.icon}
            </div>
            <p className="mt-2 text-lg font-medium cursor-pointer text-gray-700 hover:text-red-400">
              {facility.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
