"use client";

import React, {useState} from 'react';

const Quantity = () => {
    const [qty, setQty] = useState(1);
  return (
    <div className='flex items-center gap-x-4'>
        {/* Minus */}
        <button className='w-8 h-8 rounded-full border duration-300 center  bg-white text-black'
            onClick={()=>{
                setQty(qty <= 1 ? 1 : qty - 1);
            }}
        >-</button>
        {/* Number */}
        <span className='text-lg font-sans font-semibold'>{qty}</span>
        {/* Plus */}
        <button className='w-8 h-8 rounded-full border duration-300 center bg-black text-white'
            onClick={()=>{
                setQty(qty + 1);
            }}
        >+</button>

    </div>
  )
}

export default Quantity