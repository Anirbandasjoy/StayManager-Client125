import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-[600px] ">
        <Image
          src="https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="bannerImage"
          layout="fill"
          className="object-cover"
        />
        {/* <div className="w-full h-full  bg-gradient-to-b from-[#5eaaf590] absolute top-0"></div> */}
        <div className="w-full h-full bg-gradient-to-b  from-[#5eaaf5ab] to-[#ffffff] absolute top-0"></div>
        <div className="absolute w-full h-full flex justify-center items-center top-0">
          <div className="text-center space-y-2">
            <h1 className="text-6xl font-bold text-gray-700">Wellcome.</h1>
            <p className="text-lg text-gray-600">
              Pleas explore my hostel website visite here and my website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
