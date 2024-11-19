import React from 'react'
import Image from 'next/image'

export default function StylePage() {
  return (

    <div className="bg-[#F0F0F0] h-[750px] justify-around lg:w-[1139px] lg:h-[600px] px-[100px] pt-10 lg:ml-24 gap-0  rounded-2xl">
  
  <h2 className="text-center text-4xl font-bold mb-6">Browse By Dress Style</h2>
  
  {/* Images Grid*/}
  <div className="h-[600px] grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2 lg:h-[420px] lg:gap-6">
   

    <Image src="/pictures/61.png" alt="casual" width={450} height={200} className="lg:w-[350px] lg:h-[189px] lg:pl-10 transition-transform hover:scale-110"/>
    <Image src="/pictures/62.png" alt="casual" width={350} height={200} className="lg:w-[500px] lg:h-[189px] lg:pr-12 transition-transform hover:scale-110"/>
    <Image src="/pictures/64.png" alt="casual" width={350} height={200} className="lg:w-[600px] lg:h-[189px] lg:pl-10 transition-transform hover:scale-110"/>
    <Image src="/pictures/63.png" alt="casual" width={350} height={200} className="lg:w-[400px] lg:h-[189px] lg:pl-14 transition-transform hover:scale-110"/>
  </div>
</div>

  
  )
}
