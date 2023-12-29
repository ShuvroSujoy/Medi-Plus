import React from 'react';
import { BsFileRichtext} from 'react-icons/bs';
import { FaTooth} from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
import { BsFillEarFill } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import { MdOutlineBloodtype } from 'react-icons/md';


const HealthOffer = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-5 my-10' >
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-Inter text-center lg:w-1/2 md:w-1/2 w-4/6'>We Offer Different Services To Improve Your Health</h1>
                <img className='h-6 w-12' src="public/img/section-img.png" alt="" />
                <p className='text-base font-medium text-[#878797] text-center'>Loren ipsum dolor sit amet consectetur adipiscing elit praesent aliquet.<br/> pretiumts</p>
            </div>
            <div className='grid lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 px-28 py-10 gap-10'>
                <div className='flex gap-5'>
                    <div className='text-blue-600'>
                        <BsFileRichtext size={40} />
                    </div>
                    <div className='flex flex-col justify-start gap-5'>
                        <h2 className='text-xl font-Inter hover:text-blue-600'>General Treatment</h2>
                        <p className='text-base font-medium text-[#878797]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='text-blue-600'>
                        <FaTooth size={40} />
                    </div>
                    <div className='flex flex-col justify-start gap-5 '>
                        <h2 className='text-xl font-Inter hover:text-blue-600'>Teeth Whitening</h2>
                        <p className='text-base font-medium text-[#878797]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='text-blue-600'>
                        <BsFillHeartFill size={40} />
                    </div>
                    <div className='flex flex-col justify-start gap-5 '>
                        <h2 className='text-xl font-Inter hover:text-blue-600'>Hear Surgery</h2>
                        <p className='text-base font-medium text-[#878797]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='text-blue-600'>
                        <BsFillEarFill size={40} />
                    </div>
                    <div className='flex flex-col justify-start gap-5 '>
                        <h2 className='text-xl font-Inter hover:text-blue-600'>Ear Treatment</h2>
                        <p className='text-base font-medium text-[#878797]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='text-blue-600'>
                        <FaEye size={40} />
                    </div>
                    <div className='flex flex-col justify-start gap-5'>
                        <h2 className='text-xl font-Inter hover:text-blue-600'>Vision Treatment</h2>
                        <p className='text-base font-medium text-[#878797]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='text-blue-600'>
                        <MdOutlineBloodtype size={40} />
                    </div>
                    <div className='flex flex-col justify-start gap-5'>
                        <h2 className='text-xl font-Inter hover:text-blue-600'>Blood Transfusion</h2>
                        <p className='text-base font-medium text-[#878797]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthOffer;