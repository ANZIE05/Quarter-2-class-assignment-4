"use client"

import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import Image from 'next/image';
import button from "@/app/assets/Frame 5.png"

export default function Navbar() {
  
  return (
    <div className='flex items-center lg:py-2 h-14'>
    
            <span className='flex text-lg font-bold lg:text-2xl items-center gap-3 lg:pl-8'>  <IoMenu name="menu" className="cursor-pointer lg:hidden"/> SHOP.CO </span>

            <span className="text-3xl cursor-pointer mx-2 lg:hidden block"> </span>
      

        <ul className="lg:flex z-[-1] lg:z-auto lg:static lg:w-auto lg:py-0 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 lg:justify-start lg:pl-10">
      <li className="flex mx-4 my-6 lg:my-0">
        <a href="#" className="text-xl hover:underline duration-500">Shop</a>
      </li>
      <li className="flex mx-4 my-6 lg:my-0">
        <a href="#" className="text-xl hover:underline duration-500">On Sale</a>
      </li>
      <li className="flex mx-4 my-6 lg:my-0">
        <a href="#" className="text-xl hover:underline duration-500">New Arrivals</a>
      </li>
      <li className="flex mx-4 my-6 lg:my-0">
        <a href="#" className="text-xl hover:underline duration-500">Brands</a>
      </li>

    </ul>
    <div className='flex lg:pr-4 w-[700px] lg:justify-around'> 
    <input type="text"  placeholder="Search for products..."  className="text-gray-800 hidden lg:block px-24 bg-gray-200 rounded-full focus:outline-none"
          />
        
        <Image src={button} alt="buttons" width={100} height={100}/></div>
      
    </div>
  )
}
 

