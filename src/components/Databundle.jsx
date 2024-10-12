import React from "react";
import Image from "next/image";

const Databundle = () => {
  return (
    <div className="">
      <h1 className="title">BetaClan Data Bundle </h1>
      <p className="text-center text-xl -mt-[3.5rem] mb-10">
        Infocoin offer a very affordable data bundle even if it’s on-chain
        transaction
      </p>
      <div className="flex gap-10 items-center justify-between">
        <Image
          className="rounded-lg"
          alt=""
          width={250}
          height={250}
          src="/airtel.png"
        />
        <Image
          className="rounded-lg"
          alt=""
          width={250}
          height={250}
          src="/glo.png"
        />
        <Image
          className="rounded-lg"
          alt=""
          width={250}
          height={250}
          src="/mtn.png"
        />
        <Image
          className="rounded-lg"
          alt=""
          width={250}
          height={250}
          src="/etisalat.png"
        />
      </div>
    </div>
  );
};

export default Databundle;
