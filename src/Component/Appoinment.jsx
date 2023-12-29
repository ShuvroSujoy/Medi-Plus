import React from 'react';
import Login from './Login';

const Appoinment = () => {
    const SubmitFile = () =>{
        alert('Your Details has Submited');
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-5 m-10'>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-Inter text-center lg:w-1/2 md:w-1/2 w-4/6'>We are Always Ready To Help You. Book An Apoinment</h1>
                <img className='h-6 w-12' src="public/img/section-img.png" alt="" />
                <p className='text-base font-medium text-[#878797] text-center'>Loren ipsum dolor sit amet consectetur adipiscing elit praesent aliquet.<br/> pretiumts</p>
            </div>
            <div className='lg:flex lg:flex-row lg:justify-center items-center flex flex-col w-full '>
                <div className='lg:w-1/2 w-5/6 text-center m-20 flex flex-col gap-5'> 
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <input type='name' placeholder='Name' className='border h-12 w-full text-left px-2 py-1 rounded-md '/>
                        <input type='email' placeholder='Email' className='border h-12 w-full text-left px-2 py-1 rounded-md '/>
                        <input type='number' placeholder='Phone' className='border h-12 w-full text-left px-2 py-1 rounded-md '/>
                        <select type='name' placeholder='Doctor' className='border h-12 w-full text-left px-2 py-1 rounded-md text-[#9999b5]'>
                            <option className='text-[#9999b5] px-2' selected>Department</option>
                            <option className='text-[#9999b5] px-2'>Cardiac Clinic</option>
                            <option className='text-[#9999b5] px-2'>Neurology</option>
                            <option className='text-[#9999b5] px-2'>Dentistry</option>
                            <option className='text-[#9999b5] px-2'>Gastroenterology</option>
                        
                        </select>
                        <select type='name' placeholder='Doctor' className='border h-12 w-full text-left px-2 py-1 rounded-md text-[#9999b5]'>
                            <option className='text-[#9999b5] px-2' selected>Doctor</option>
                            <option className='text-[#9999b5] px-2'>Dr.Akther Hossain</option>
                            <option className='text-[#9999b5] px-2'>DR.Dery Alex</option>
                            <option className='text-[#9999b5] px-2'>Dr.Jovis Karon</option>
                            <option className='text-[#9999b5] px-2'>Dr.Mahabubur Rahman</option>
                            <option className='text-[#9999b5] px-2'>Dr.Jinia</option>
                        
                        </select>
                        <input type='Date' placeholder='' className='border h-12 w-full text-left text-[#9999b5] px-2 py-1 rounded-md '/>
                    </div>
                    <div>
                        <textarea className='h-52 w-full border rounded-md p-2 text-[#9999b5]'/>
                    </div>
                    <div className='lg:flex lg:flex-row flex flex-col lg:justify-start lg:items-center md:justify-start md:items-center gap-5'>
                    <div >
                    <button onClick={SubmitFile} className='h-12 w-full  border rounded-md px-2 bg-blue-600 hover:bg-zinc-800 text-white font-Inter'>Book An Appoinment</button>
                    </div>
                    <div>
                        <p className='text-[#9999b5] text-2xl'>(Alert)</p>
                    </div>
                    </div>
                </div>
                <div className='lg:w-1/2 text-center m-10'>
                    <img src="public/img/contact-img.png" alt="" />
                </div>
            </div>
            <div className='lg:flex lg:flex-row lg:justify-around lg:items-center md:flex md:flex-row md:justify-around md:items-center flex flex-col gap-10 items-center m-10 bg-gray-100 h-96 w-full p-5'>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className='text-2xl text-center font-Inter'>Sign up for newsletter</h1>
                    <p className='text-[#9999b5] text-center '>Cu qui soleat pariendo urbanitas. Eum aperiri indoctum eu, homero alterum.</p>
                </div>
                <div className='lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-5'> 
                    <input type='email' placeholder='Your Email Adddress' className='lg:h-16 h-12 w-full  border rounded-md px-2' />
                    <button className='lg:h-16 h-12  border rounded-md px-4 bg-blue-600 hover:bg-zinc-800 text-white font-Inter'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;