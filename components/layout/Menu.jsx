import React from 'react'
import Link from 'next/link';
// import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Female", url: "/category/Female" },
    { id: 2, name: "Male", url: "/category/Male" },
    { id: 3, name: "Kids", url: "/category/Kids" },
    { id: 4, name: "All Products", url: "/products" },
  ];

// const subMenuData = [
//   { id: 1, name: "Jordan", doc_count: 11 },
//   { id: 2, name: "Sneakers", doc_count: 8 },
//   { id: 3, name: "Running Shoes", doc_count: 64 },
//   { id: 4, name: "Football Shoes", doc_count: 107 },
// ];

const Menu = ({showCatMenu,setShowCatMenu }) => {
  
  return (
    <ul className='flex md:flex items-center gap-6 font-medium text-black' >
      {
        data.map((item) => {
          return(
            <React.Fragment key={item.id}>
                 <li className='cursor-pointer'>
                    <Link href={item.url}>{item.name}</Link>
                  </li>
            </React.Fragment>
          )
        })
      }
    </ul>

  ) 

}

export default Menu