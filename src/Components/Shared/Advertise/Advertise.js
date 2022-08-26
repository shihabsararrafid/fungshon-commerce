import React from 'react';
import fbicon from './../../../Images/Icons/Facebook Icon.png';
import instaicon from './../../../Images/Icons/Instagram.png';
import pintericon from './../../../Images/Icons/Pinterest.png';
const Advertise = () => {
    return (
        <div className='bg-black flex  items-center h-[75px] w-full text-white'>
          <div className='flex justify-between lg:w-[85%] mx-auto'>
          <p>Free shipping on all UK orders!</p> 
          <div className="icons flex ">
            <img className='block mx-3 cursor-pointer' src={fbicon} alt="" />
            <img className='block mx-3 cursor-pointer' src={instaicon} alt="" />
            <img className='block mx-3 cursor-pointer' src={pintericon} alt="" />
            </div> 
          </div>
        </div>
    );
};

export default Advertise;