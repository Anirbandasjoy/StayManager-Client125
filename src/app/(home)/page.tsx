import Banner from "@/extraComponents/home/Banner";
import Rooms from "@/extraComponents/rooms/Rooms";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner
        imageURL="https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        headingText="Wellcome."
        subheadingText="Pleas explore my hostel website visite here and my website"
      />
      <Rooms />
    </div>
  );
};

export default Home;
