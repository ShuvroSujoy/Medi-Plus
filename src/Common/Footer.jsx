import React from 'react';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { SiVimeo} from 'react-icons/si';
import { SiPinterest } from 'react-icons/si';
import { MdArrowRight } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { BiLogoTelegram } from 'react-icons/bi';
const Footer = () => {
    return (
        <>
        <div className=' w-full bg-[#176ABC] flex flex-col justify-between'>
            <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-2 p-20'>
                <div className='text-white flex flex-col gap-5'>
                    <h2 className='text-2xl font-Inter'>About us</h2>
                    <div className='h-1 w-16 bg-white'></div>
                    <p className='text-base font-semibold lg:w-60'>Lorem ipsum dolor sit am consectetur adipiscing alit do eiusmod tempor incididunt ut labore dolore magna.</p>
                    <div className='flex gap-2'>
                        <div className='border h-10 w-10 flex justify-center items-center rounded-full hover:bg-white hover:text-[#176ABC] '>
                        <BiLogoFacebook size={30}/>
                        </div>
                        <div className='border h-10 w-10 flex justify-center items-center rounded-full hover:bg-white hover:text-[#176ABC]'>
                        <AiOutlineGooglePlus size={20} />
                        </div>
                        <div className='border h-10 w-10 flex justify-center items-center rounded-full hover:bg-white hover:text-[#176ABC]'>
                        <AiOutlineTwitter size={20}/>
                        </div>
                        <div className='border h-10 w-10 flex justify-center items-center rounded-full hover:bg-white hover:text-[#176ABC]'>
                        <SiVimeo size={20}/>
                        </div>
                        <div className='border h-10 w-10 flex justify-center items-center rounded-full hover:bg-white hover:text-[#176ABC]'>
                        <SiPinterest size={20}/>
                        </div>
                       
                    </div>
                </div>
                <div className='text-white flex flex-col gap-5'>
                    <h2 className='text-2xl font-Inter'>Quick Links</h2>
                    <div className='h-1 w-16 bg-white'></div>
                    <div className='grid grid-cols-2'>
                    <div className='flex items-center hover:relative -right-1'>
                       <MdArrowRight size={30}/>
                       <p>Home</p> 
                    </div>
                    <div className='flex items-center hover:relative -right-1'>
                       <MdArrowRight size={30}/>
                       <p>About Us</p> 
                    </div>
                    <div className='flex items-center hover:relative -right-1'>
                       <MdArrowRight size={30}/>
                       <p>Services</p> 
                    </div>
                    <div className='flex items-center hover:relative -right-1'>
                       <MdArrowRight size={30}/>
                       <p>Our Cases</p> 
                    </div>
                    <div className='flex items-center hover:relative -right-1'>
                       <MdArrowRight size={30}/>
                       <p>Other Links</p> 
                    </div>
                    <div className='flex items-center hover:relative -right-1'>
                       <MdArrowRight size={30}/>
                       <p>Counsuling</p> 
                    </div>
                    <div className='flex items-center hover:relative -right-1'>
                       <MdArrowRight size={30}/>
                       <p>Finance</p> 
                    </div>
                    <div className='flex items-center hover:relative -right-1'>
                       <MdArrowRight size={30}/>
                       <p>Testimonials</p> 
                    </div>
                    <div className='flex items-center hover:relative -right-1'>
                       <MdArrowRight size={30}/>
                       <p>FAQ</p> 
                    </div>
                    <div className='flex items-center hover:relative -right-1'>
                       <MdArrowRight size={30}/>
                       <p>Contact Us</p> 
                    </div>
                    </div>
                </div>
                <div className='text-white flex flex-col gap-5'>
                    <h2 className='text-2xl font-Inter'>Open Hours</h2>
                <div className='h-1 w-16 bg-white'></div>
                <p className='text-base font-semibold lg:w-60'>Lorem ipsum dolor sit ame consectetur adpisicing elit do eiusmod tempor incididunt.</p>
                <div className='grid grid-cols-2'>
                    <p>Monday-Friday</p>
                    <p>Saturday</p>
                    <p>Monday-Thusday</p>
                    <p>8.00-20.00</p>
                    <p>9.00-18.30</p>
                    <p>9.00-15.00</p>
                </div>
                </div>
                <div className='text-white flex flex-col gap-5'>
                    <h2 className='text-2xl font-Inter'>Newsletter</h2>
                    <div className='h-1 w-16 bg-white'></div>
                    <p className='text-base font-semibold lg:w-60'>subscribe to our newsletter to get allour news in your inbox.. Loren ipsum dolor sit amet,consectetur adipisicing elit,</p>
                    
                        <div className='flex justify-between h-12 w-10/12 bg-[#176ABC] border border-white rounded-md'>
                            <input type='email' placeholder='Email Address' className='border border-0 w-full rounded-md bg-[#176ABC] px-5 font-Inter'/>
                            <div className='h-12 w-1/6 flex justify-center items-center text-[#176ABC] bg-white rounded-r-md'>
                                <BiLogoTelegram size={30}/>
                            </div>
                        </div>
                        
                    
                </div>
            </div>
            <div className='h-[80px] w-full bg-blue-500 border border-t-0 flex justify-end items-center p-2'>
                <div className= 'flex justify-center items-center text-white h-12 w-12 rounded-md bg-blue-600 hover:bg-zinc-800 btn'>
                    <div>
                    <MdKeyboardArrowUp size={40}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;