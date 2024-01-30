import Image from "next/image";
import Link from "next/link";
import React from "react";
import promo1 from "public/assests/event1.webp";
import promo2 from "public/assests/event2.webp";
import promo3 from "public/assests/event3.webp";
import { Button } from "@/components/ui/button";

const Promotion = () => {
  return (
    <div className="mt-[50px] mb-[100px]">
      <div>
        <h3 className="text-blue-600 font-sans font-bold text-sm center mb-2">
          PROMOTIONS
        </h3>
        <h2 className="center scroll-m-20 pb-12 text-4xl font-bold tracking-tight transition-colors first:mt-2">
          Our Promotions Events
        </h2>
      </div>

      {/* Promotion Start here */}
      <div className="flex gap-8 justify-around">
        {/* Left Div */}
        <div className="flex flex-col gap-4">
          <div className="bg-gray-300 flex justify-center p-0">
            <div>
              {/* <div className="flex gap-2"> */}
                <h2 className="scroll-m-20 w-[50%] text-4xl font-extrabold tracking-tight lg:text-3xl text-black ml-8 mt-6">
                  GET UP TO
                <span className="text-black text-5xl font-bold ml-2">60%</span>
                </h2>
              {/* </div> */}
              <p className="text-black text-lg w-4/12 ml-8 mt-2">For the summer season</p>
            </div>

            <div>
              <Image src={promo1} alt="event1" />
            </div>
          </div>

          <div className="bg-black flex flex-col items-center p-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-white mt-8">
              GET 30% OFF
            </h1>
            <h4 className="scroll-m-20 text-sm tracking-tight m-4 text-white">
              USE PROMO CODE
            </h4>
            <Button className="scroll-m-20 text-lg font-bold tracking-tight mb-2 px-12 py-4 text-white">
              D I N E W E E K E N D S A L E
            </Button>
          </div>
        </div>

        {/* Right Div  */}
        <div className="flex gap-x-4">
          <div className="flex-1 bg-orange-100">
            <div className="mt-4 ml-4">
              <h1>Flex Sweatshirt</h1>
              <div className="flex gap-x-2">
                <h1 className="line-through">$100.00</h1>
                <span className="font-bold">$75.00</span>
              </div>
            </div>
            <div className="mt-5">
              <Image src={promo2} alt="event2" />
            </div>
          </div>

          <div className="flex-1 bg-gray-200">
            <div className="mt-4 ml-4">
              <h1>Flex Push Button Bomber</h1>
              <div className="flex gap-x-2">
                <h1 className="line-through">$225.00</h1>
                <span className="font-bold">$190.00</span>
              </div>
            </div>
            <div className="mt-5">
              <Image src={promo3} alt="event3" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'> */}
      {/* 1st Child */}
      {/* <div className="hero h-[25rem] promo-1">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">GET UP TO 60%</h1>
                            <p className="text-xl text-muted-foreground">For the Summer Season</p>
                        </div>
                    </div>
                </div> */}
      {/* 2nd Child */}
      {/* <div className="hero h-[25rem] promo-2">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <p className="text-xl text-muted-foreground">For the Summer Season</p>
                        </div>
                    </div>
                </div> */}
      {/* </div> */}
    </div>
  );
};

export default Promotion;
