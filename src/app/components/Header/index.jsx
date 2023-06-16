import React from "react";

export default function Index() {
  return (
    <div className="flex justify-center py-6">
      <div className=" w-full max-w-7xl flex flex-row justify-between items-center">
        <div className="flex flex-row gap-5">
          <span>
            <a className="cursor-pointer">Shop</a>
          </span>
          <span>
            <a className="cursor-pointer">About us</a>
          </span>
          <span>
            <a className="cursor-pointer">Contacts</a>
          </span>
        </div>

        <div className="ml-[-200px]">
          <span className="text-4xl">EmeryBloom</span>
        </div>

        <div>
          <span>
            <a className="cursor-pointer">Cart</a>
          </span>
        </div>
      </div>
    </div>
  );
}
