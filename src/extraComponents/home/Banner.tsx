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
        <div className="w-full h-full  bg-gradient-to-b from-[#5eaaf590] absolute top-0"></div>
      </div>
    </div>
  );
};

export default Banner;
