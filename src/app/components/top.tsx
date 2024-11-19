import React from 'react'

export default function TopBar() {
  return (
    <div className='flex xs:w-[390px] xs:h-[34px] py-[9px] px-[28px] text-center justify-center items-center gap-[10px] bg-[#000] lg:w-[1350px] lg:h-[38px]'>
        
        <div className='w-[320px] h-[16px] lg:h-[19px] gap-[0px] opacity-[0px]  text-[#fff]'>

        <p className='text-[12px] font-normal leading-[16.2px]  lg:text-[14px]'>
        Sign up and get 20% off to your first order. <span className='text-[12px] font-medium underline lg:text-[12px]'>Sign Up Now</span>
        </p>
        </div>
       
    </div>
  )
}
