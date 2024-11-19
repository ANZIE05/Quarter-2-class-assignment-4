import React from 'react'
import Image from 'next/image'
import hero from "@/app/assets/Rectangle 3.png"
import "../css/satoshi.css"

export default function Hero() {
  return (
    <>

    {/* <div className=" bg-[#F2F0F1] min-h-screen flex items-center justify-center border-4 border-yellow-500"> */}

      <div className=" bg-[#F2F0F1] w-full px-4 lg:px-2 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        {/* Left Side Text Section */}
        <div className="lg:mb-20 text-center lg:text-left flex flex-col items-center lg:items-start gap-4 lg:w-1/2">
          <h1 className="'Satoshi-Bold' style={{fontFamily:Satoshi-Bold}} text-3xl lg:text-6xl font-bold leading-tight text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-600 lg:text-lg">
            Browse through our diverse range of meticulously crafted garments, designed<br/> to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black hover:bg-slate-600 text-white px-28 py-2 lg:px-10 rounded-full mt-4">
            Shop Now
          </button>


                    {/* Stats Section */}
        <div className="grid grid-cols-2 lg:flex flex-row justify-around w-full gap-6 lg:gap-16 py-8">
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold">200+</h2>
          <p className="text-gray-600">International Brands</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold">2,000+</h2>
          <p className="text-gray-600">High-Quality Products</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold">30,000+</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>
      </div>


        </div>

        {/* Right Side Image Section */}
        <div className="flex items-center justify-center lg:w-1/2">
        <Image src={hero} alt="hero" width={1440} height={663} className="transition-transform hover:scale-110"/>
        </div>


      </div>

    {/* </div> */}

    </>
  )
}




