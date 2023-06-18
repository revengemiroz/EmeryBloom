import React from "react";

import Logo from "./assets/logo.png";
import Image from "next/image";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className=" flex h-screen justify-center items-center ">
        <div className="flex flex-col justify-center items-center ">
          <div>
            <Image src={Logo} width={600} height={600} alt="logo" />
          </div>
          <p className="text-[30px] text-[#ec0332]">Coming Soon</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}
