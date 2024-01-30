import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import heroimg from "@/public/assests/header.webp";
import feature1 from "@/public/assests/Featured1.webp";
import feature2 from "@/public/assests/Featured2.webp";
import feature3 from "@/public/assests/Featured3.webp";
import feature4 from "@/public/assests/Featured4.webp";

const Hero = () => {
  return (
    <section>
      <div className="flex gap-y-10 md:flex-col lg:flex-row py-6">
        {/* Left Div */}
        <div className="flex-1">
          <Badge className="px-8 py-2 bg-blue-200 text-blue-700">
            Sale 70%
          </Badge>

          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 w-2/4 [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Button className="h-6 px-8 py-10 mt-4 gap-x-2 text-lg">
            <ShoppingCart />
            Start Shopping
          </Button>

          <div className="flex gap-x-6 mt-10">
            <Image src={feature1} alt="feature" />
            <Image src={feature2} alt="feature" />
            <Image src={feature3} alt="feature" />
            <Image src={feature4} alt="feature" />
          </div>
        </div>
        {/* Right Div */}
        <div className="bg-red-100 rounded-full">
          {/* <div className="bg-red-100  w-[500px] h-[500px] absolute top-0 bottom-0 left-0 rounded-full p-0 transition-all "> */}

          <Image src={heroimg} alt="hero" />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
