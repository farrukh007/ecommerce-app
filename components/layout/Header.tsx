"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "@/public/assests/Logo.webp";
import { ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import DropDown from "@/components/DropDown";
import { BiMenuAltRight, BiSearch } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineChevronDown } from "react-icons/hi";
import Menu from "@/components/layout/Menu";
// import MenuMobile from "@/components/layout/MenuMobile";
import Expand from "./Expand";
import { NavbarArray, NavbarItemType } from "@/utils/NavbarArrayandTypes";

export const Header = () => {
  const [menuBar, setMenuBar] = useState<boolean>(false);
  const [nav, setNav] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrolly(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrolly]);

  return (
    <div>
      <div className="flex justify-between items-center h-24 text-black space-x-12">
        <div className="flex shrink-0 w-40">
          <Link href="/">
            <Image width={500} height={500} src={logo} alt="Dinemarket" />
          </Link>
        </div>

        <div className="hidden lg:flex justify-between items-center w-full">
          <ul className="flex font-medium text-base gap-x-8">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li key={index} className="flex items-center gap-1 relative py-1 cursor-pointer group">
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown ? (
                  <HiOutlineChevronDown className="-rotate-180 group-hover:rotate-0 duration-300" />
                ) : (
                  ""
                )}
                {item.isDropDown && (
                  <div 
                    className={`invisible group-hover:visible absolute top-8 left-0 py-2 bg-white text-sm font-light min-w-[7.8rem]`}
                  >
                    <DropDown item={item} />
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center text-gray-400 relative">
            <BiSearch size={24} className="absolute ml-2" />
            <Input
              type="text"
              placeholder="What you looking for"
              className="px-10"
            />
          </div>

          <div className="bg-gray-100 rounded-full p-3 transition-all relative hover:scale-110 hidden md:flex">
            <Badge className="bg-red-500 h-4 w-4 rounded-full flex justify-center items-center p-0 absolute top-0 right-2 text-sm">
              0
            </Badge>
            <ShoppingCart size={24} color="black" />
          </div>
        </div>

        <div onClick={() => setMenuBar(!menuBar)}>
          {menuBar ? (
            <div className="flex lg:hidden">
              <AiOutlineClose size={24} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <GiHamburgerMenu size={26} />
            </div>
          )}
        </div>
      </div>
      {menuBar && <MenuMobile />}
    </div>
  );
};

const MenuMobile = () => {
  return (
    <div>
      <div className="bg-gray-100 rounded-full p-3 transition-all relative hover:scale-110 hidden md:flex">
        <Badge className="bg-red-500 h-4 w-4 rounded-full flex justify-center items-center p-0 absolute top-0 right-2 text-sm">
          0
        </Badge>
        <ShoppingCart size={24} color="black" />
      </div>
      {NavbarArray.map((item: NavbarItemType, index: number) => {
        return <Expand key={index} item={item} />;
      })}
    </div>
  );
};
