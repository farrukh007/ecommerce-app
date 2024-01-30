"use client";

import Link from "next/link";
import { NavbarArray, NavbarItemType } from "@/utils/NavbarArrayandTypes";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useState } from "react";

const MenuMobile = () => {
  const [menuExpended, setMenuExpended] = useState(false);
  return (
    <div>
      <div className="bg-gray-100 rounded-full p-3 transition-all relative hover:scale-110 hidden md:flex">
        <Badge className="bg-red-500 h-4 w-4 rounded-full flex justify-center items-center p-0 absolute top-0 right-2 text-sm">
          0
        </Badge>
        <ShoppingCart size={24} color="black" />
      </div>
      <div className="py-2 bg-white ">
        {NavbarArray.map((item: NavbarItemType, index: number) => {
          return (
            <li key={index} className="py-6 hover:bg-gray-200 list-none">
              <div onClick={()=> setMenuExpended(!menuExpended)} className="flex justify-center font-semibold mb-1">
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown ? (
                  <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" />
                ) : (
                  ""
                )}
              </div>
              <div className="flext flex-col text-center">
                {menuExpended && item.dropDownData?.map((subitem:NavbarItemType, index: number) =>(
                  
                  // <Link href={subitem.href}>{subitem.label}</Link>
                  <div key={index}>{subitem.label}</div>
                ) )}
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default MenuMobile;

// ================================= OLD CODE ==================================================
// import React from 'react'
// import Link from 'next/link';
// // import { BsChevronDown } from "react-icons/bs";

// const data = [
//     { id: 1, name: "Female", url: "/category/Female" },
//     { id: 2, name: "Male", url: "/category/Male" },
//     { id: 3, name: "Kids", url: "/category/Kids" },
//     { id: 4, name: "All Products", url: "/products" },
//   ];

// // const subMenuData = [
// //   { id: 1, name: "Jordan", doc_count: 11 },
// //   { id: 2, name: "Sneakers", doc_count: 8 },
// //   { id: 3, name: "Running Shoes", doc_count: 64 },
// //   { id: 4, name: "Football Shoes", doc_count: 107 },
// // ];

// const MenuMobile = ({showCatMenu,setShowCatMenu, setMobileMenu }) => {

//   return (
//     <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)]
//     bg-white border-t text-black' >
//       {
//         data.map((item) => {
//           return(
//             <React.Fragment key={item.id}>
//               <li className='py-4 px-5 border-b'>
//                     <Link href={item.url} onClick={() => setMobileMenu(false)}>{item.name}</Link>
//                 </li>
//             </React.Fragment>
//           )
//         })
//       }
//     </ul>

//   )

// }

// export default MenuMobile
