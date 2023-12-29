import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item bg-[url('public/img/slider.jpg')] bg-no-repeat relative bg-center w-full first-letter: h-[600px]">
            <div className='h-[600px] w-1/2 container mx-auto flex flex-col justify-center items-start gap-y-10 lg:ml-44 md:ml-36'> 
                <h1 className='text-4xl w-[600px] font-Inter'>We Provide <span className='text-[#176ABC]'>Medical</span> Services That You Can <span className='text-[#176ABC]'>Trust!</span> </h1>
                <p className='text-[#55555c] w-[600px]'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                <div className='flex gap-x-5'>
                <div className='bg-[#176ABC] text-white font-Inter text-center rounded-md hover:bg-zinc-800'>
                    <button className='px-4 py-3'>Get Appoinment</button>
                </div>
                <div className='bg-zinc-800 text-white font-Inter text-center rounded-md hover:bg-[#176ABC]'>
                    <button className='px-4 py-3'>About Us</button>
                </div>
            </div>
            </div>
    <div className="flex justify-between absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
        
      <a href="#slide4" className="btn btn-square hover:bg-zinc-800 bg-[#176ABC] text-white text-2xl" >❮</a> 
      <a href="#slide2" className="btn btn-square hover:bg-zinc-800 bg-[#176ABC] text-white text-2xl">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item bg-[url('public/img/slider2.jpg')] bg-no-repeat relative bg-center w-full first-letter: h-[600px]">
  <div className='h-[600px] w-1/2 container mx-auto flex flex-col justify-center items-start gap-y-10 lg:ml-44 md:ml-36'> 
                <h1 className='text-4xl w-[600px] font-Inter'>We Provide <span className='text-[#176ABC]'>Medical</span> Services That You Can <span className='text-[#176ABC]'>Trust!</span> </h1>
                <p className='text-[#55555c] w-[600px]'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                <div className='flex gap-x-5'>
                <div className='bg-[#176ABC] text-white font-Inter text-center rounded-md hover:bg-zinc-800'>
                    <button className='px-4 py-3'>Get Appoinment</button>
                </div>
                <div className='bg-zinc-800 text-white font-Inter text-center rounded-md hover:bg-[#176ABC]'>
                    <button className='px-4 py-3'>Contact Now</button>
                </div>
            </div>
            </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-square hover:bg-zinc-800 bg-[#176ABC] text-white text-2xl">❮</a> 
      <a href="#slide3" className="btn btn-square hover:bg-zinc-800 bg-[#176ABC] text-white text-2xl">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item bg-[url('public/img/slider3.jpg')] bg-no-repeat relative bg-center w-full first-letter: h-[600px]">
  <div className='h-[600px] w-1/2 container mx-auto flex flex-col justify-center items-start gap-y-10 lg:ml-44 md:ml-36'> 
                <h1 className='text-4xl w-[600px] font-Inter'>We Provide <span className='text-[#176ABC]'>Medical</span> Services That You Can <span className='text-[#176ABC]'>Trust!</span> </h1>
                <p className='text-[#55555c] w-[600px]'>Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Mauris sed nisl pellentes que,faucibus libero eu,gravida quam.</p>
                <div className='flex gap-x-5'>
                <div className='bg-[#176ABC] text-white font-Inter text-center rounded-md hover:bg-zinc-800'>
                    <button className='px-4 py-3'>Get Appoinment</button>
                </div>
                <div className='bg-zinc-800 text-white font-Inter text-center rounded-md hover:bg-[#176ABC]'>
                    <button className='px-4 py-3'>Learn More</button>
                </div>
            </div>
            </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-square hover:bg-zinc-800 bg-[#176ABC] text-white text-2xl">❮</a> 
      <a href="#slide4" className="btn btn-square hover:bg-zinc-800 bg-[#176ABC] text-white text-2xl">❯</a>
    </div>
  </div> 
</div>
<div className='w-5/6 mx-auto grid lg:grid-cols-3 gap-10 relative -top-[125px]'>
                <div className='bg-[#176ABC] text-opacity-100  text-white p-10 rounded-md hover:shadow-lg hover:relative -top-2'>   
                    <p className='font-semibold'>Lorem Amet</p>
                    <h3 className='text-2xl mt-2 font-bold'>Emergency Cases</h3>
                    <p className='my-5 font-semibold'>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                    <button className='font-bold flex items-center gap-2'>LEARN MORE <FaLongArrowAltRight/></button>
                </div>
                <div className='bg-[#176ABC] text-opacity-100 text-white p-10 rounded-md hover:shadow-lg hover:relative -top-2'>   
                    <p className='font-semibold'>Fusce Porttitor</p>
                    <h3 className='text-2xl mt-2 font-bold'>Doctors Timetable</h3>
                    <p className='my-5 font-semibold'>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                    <button className='font-bold flex items-center gap-2'>LEARN MORE <FaLongArrowAltRight/></button>
                </div>
                <div className='bg-[#176ABC] text-opacity-100 text-white p-10 rounded-md hover:shadow-lg hover:relative -top-2'>   
                    <p className='font-semibold'>Donec luctus</p>
                    <h3 className='text-2xl mt-2 font-bold'>Opening Hours</h3>
                    <div className='flex  justify-between font-semibold my-5'>
                        <div className='flex flex-col gap-1'>
                            <p>Monday - Fridayp </p>
                            <p>Saturday</p>
                            <p>Monday - Thusday</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p>8.00-20.00</p>
                            <p>9.00-18.30</p>
                            <p>9.00-15.00</p>
                        </div>
                    </div>
                    <button className='font-bold flex items-center gap-2'>LEARN MORE <FaLongArrowAltRight/></button>
                </div>
                
            </div>
        </div>
    );
};

export default HeroSection;