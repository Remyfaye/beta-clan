import { navItems } from "@/constants";
import React from "react";

const Header = () => {
  return (
    <div className="items-center border-b-[1px] border-gray-200 flex justify-between bg-slate-50 -m-10 p-5">
      {/* logo */}
      <h1 className="text-primary font-bold text-xl">BetaClan</h1>
      {/* navitems */}
      <div className="flex gap-5">
        {navItems.map((item) => (
          <>
            <p>{item.label}</p>
          </>
        ))}
      </div>
      {/* signin */}
      <div className="flex gap-5">
        <button className="btn-trans">Sign Up</button>
        <button className="btn-full">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Header;
