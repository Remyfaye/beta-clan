import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <h1 className="title">About BetaClan</h1>
      <div className="lg:flex gap-10 items-center">
        <Image
          className=" rounded-lg lg:hidden mb-5"
          alt=""
          width={500}
          height={500}
          src="/abt.png"
        />
        <div className="lg:w-[50%]">
          <p className="text-xl mb-5 text-center">
            BetaClan is a platform where you can buy data and airtime with any
            currency you have (on-chain and off-chain In Infocoin you can have a
            subscription plan for any perion of time you want Infocoin is the
            fast, secure and affordable way to get your data bundles on any
            Nigerian network. We offer the best prices rates for Airtel, MTN,
            9mobile and Glo. You can get any data bundle as low as 500MB with
            crypto currency.
          </p>
          <button className="btn-full w-full mt-3 lg:w-[50%]">
            View Bundle
          </button>
        </div>
        <Image
          className="w-[50%] rounded-lg hidden lg:block"
          alt=""
          width={500}
          height={500}
          src="/abt.png"
        />
      </div>
    </div>
  );
};

export default About;
