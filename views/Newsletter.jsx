import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Newsletter = () => {
  return (
    <div className="mt-[100px] mb-[100px] relative">
      <h2 className="text-center scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
        Subscribe Our Newsletter
      </h2>
      <h1 className="scroll-m-20 absolute top-0 text-center  text-4xl font-extrabold tracking-tight lg:text-5xl">
        <span className=" opacity-50 ">

      Taxing Laughter: The Joke Tax Chronicles
        </span>
    </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm text-center text-gray-300">
        Get the latest information and promo offers directly
      </p>
      <div className="center gap-x-2 mt-8">
        <Input className=" h-full p-3" type="email" placeholder="Input email address" />
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Newsletter;
