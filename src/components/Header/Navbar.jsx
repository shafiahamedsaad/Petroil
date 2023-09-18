import React from 'react'

const Navbar = () => {
  return (
    <div className='py-[30px] bg-primary font-pops'>
        <div className='max-w-container mx-auto flex justify-between'>
            <div><img src="https://i.ibb.co/wrWDbjY/Logo.png" alt="logo.png" /></div>
            <div className='flex items-center gap-x-[47px] text-base font-semibold text-white'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Gallery</a>
                <a href="#">Blog</a>
                <a className='px-[32px] py-[13px] border-2 border-white' href="#">Contract</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar