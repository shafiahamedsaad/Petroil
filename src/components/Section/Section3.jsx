import React from 'react'

const Section3 = () => {
  return (
    <div className='mt-[28px] max-w-container mx-auto flex items-center font-pops'>
        <div className='w-[50%]'>
            <div className='text-[#000] text-[64px] font-bold'>Our Services</div>
            <div className='text-secondary font-medium text-[16px] w-[405px] ml-[15px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
        </div>
        <div className='w-[50%] bg-section3 bg-no-repeat bg-cover py-[147px] pl-[116px]'>
            <div className='text-[#fff] text-[36px] font-bold '>Modern natural oil and gas refineries.</div>
            <div className='mt-[30px]'>
                <a className='py-[14px] px-[41px] bg-primary text-[16px] text-white font-semibold' href="#">LEARN MORE</a>
            </div>
        </div>
    </div>
  )
}

export default Section3