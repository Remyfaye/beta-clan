import { navItems } from "@/constants";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="items-center border-b-[1px] border-gray-200 flex justify-between bg-slate-50 -m-10 p-5">
      {/* logo */}

      <h1 className="text-primary font-bold text-xl">BetaClan</h1>
      {/* navitems */}
      <div className="lg:flex gap-5 hidden ">
        {navItems.map((item) => (
          <>
            <p>{item.label}</p>
          </>
        ))}
      </div>
      {/* signin */}
      <div className="lg:flex gap-5 hidden">
        <button className="btn-trans">Sign Up</button>
        <button className="btn-full">Connect Wallet</button>
      </div>

      <Image />
    </div>
  );
};

export default Header;
