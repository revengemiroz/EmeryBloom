import React from "react";

import Tiktok from "../../assets/tiktok.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Image from "next/image";

export default function Index() {
  return (
    <div className="flex flex-row gap-5 justify-end p-5">
      <a href="https://www.tiktok.com/@emerybloom_" target="_blank">
        <span>
          <Image width={20} height={20} src={Tiktok} alt="Tiktok" />
        </span>
      </a>
      <a
        href="https://www.facebook.com/people/Emery-Bloom/100088171753256/"
        target="_blank"
      >
        <span>
          <Image width={20} height={20} src={Facebook} alt="Facebook" />
        </span>
      </a>
      <a
        href="https://www.instagram.com/emerybloom_/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
        target="_blank"
      >
        <span>
          <Image width={20} height={20} src={Instagram} alt="Instagram" />
        </span>
      </a>
      <span title="9806395041">
        <Image width={20} height={20} src={Whatsapp} alt="Whatsapp" />
      </span>
    </div>
  );
}
