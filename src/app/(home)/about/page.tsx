import NavbarWrapper from "@/components/home/NavbarWrapper";
import Team from "@/components/home/team/Team";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <NavbarWrapper />
      <div className="mt-5">
        <Team />
      </div>
    </div>
  );
};

export default About;
