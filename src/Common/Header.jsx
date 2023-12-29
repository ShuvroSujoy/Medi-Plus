    import React, { useContext, useState } from 'react';
    import { TbMailFilled } from 'react-icons/tb';
    import { IoIosCall } from 'react-icons/io';
    import { BiMenu } from 'react-icons/bi';
    import {Drawer, Tooltip } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { ContextUser } from '../main';
import { getAuth, signOut } from 'firebase/auth';
    
    const Header = () => {
        
        const [auth,setAuth]=useContext(ContextUser)
        console.log(auth);
        const [open, setOpen] = useState(false);
        const showDrawer = () => {
        setOpen(true);
  };
        const onClose = () => {
        setOpen(false);
  };
  const handleGoogleSignOut =()=>{
        const auth= getAuth()
    signOut(auth).then(() => {
        setAuth({})
    }).catch((error) => {
        
    });
}
        return (
            <>
            <div className='lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-5 lg:items-center lg:justify-around md:items-center md:justify-around items-center justify-around border border-b-1 py-4 px-5'>
                <div className='flex gap-x-5 text-black from-base-content'>
                    <h2>About</h2>
                    <h2>Doctors</h2>
                    <h2>Contacts</h2>
                    <h2 className='uppercase'>Faq</h2>
                </div>
                <div className='flex gap-x-5 text-black from-base-content'>
                    <div className='flex gap-2 items-center'>
                        <IoIosCall color='blue' />
                        <h2>+880 1234 56789</h2>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <TbMailFilled color='blue'/>
                        <h2>support@yourmail.com</h2>
                    </div>
                </div>
            </div>

            <nav>
                <div className="navbar border border-b-2 bg-base-100 flex justify-around ">
                    <div>
                    
                        <a className="btn btn-ghost normal-case text-xl">
                            <img src="public/img/logo.png" alt="" />
                        </a>
                    </div>
                        <div className="hidden lg:flex lg:justify-around gap-x-10 ">
    
                            <ul className=" flex gap-x-10">
                                <li className='hover:text-blue-600 text-xl font-bold'><NavLink to='/'>Home</NavLink></li>         
                                <li className='hover:text-blue-600 text-xl font-bold'>Pages</li>
                                <li className='hover:text-blue-600 text-xl font-bold'>Blogs</li>
                                <li className='hover:text-blue-600 text-xl font-bold'>Contact Us</li>
                                <li className='hover:text-blue-600 text-xl font-bold'>{auth.providerId?<Link onClick={handleGoogleSignOut} to='SignIn'>SignOut</Link>:<Link to='SignIn'>SignIn</Link>}</li>    
                            </ul>
                            
                        </div>
                            {
                                auth.providerId?<Tooltip title={<div>
                                    <h2 className='text-blue-600 text-blue-800 flex'><img className='h-[40px] w-[40px]' src="public/img/favicon.png" alt=""  /><span className='text-2xl text-blue-700 font-Inter'>Medi</span><span className='text-2xl text-white font-Inter'>plus</span></h2>
                                    <h3 className='text-orange-600'>Name:{auth.displayName}</h3>
                                    <p className='text-orange-600'>Email:{auth.email}</p>
                                </div>}>
                                    <div className='w-[40px] h-[40px] border rounded-full border-slate-700'>
                                <img className='rounded-full' src={auth.photoURL} alt=""/>
                            </div>
                            </Tooltip>:""
                            }
                            <div className=" hidden lg:flex lg: md:flex">
                                <p className="btn bg-blue-600 hover:bg-stone-900 text-white font-semibold w-52"><Link to='Appoinment'>Book An Appoinment</Link></p>
                            </div> 
                        <div className="dropdown">
                        
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <BiMenu onClick={showDrawer} size={40} color='blue'/>
                                <Drawer  placement="bottom" onClose={onClose} open={open}>
                                    <ul className=" flex flex-col gap-y-5 ">
                                        <li className='hover:text-blue-600 text-xl font-bold'><Link to='/'>Home</Link></li>
                                            
                                        <li className='hover:text-blue-600 text-xl font-bold'>Pages</li>
                                        <li className='hover:text-blue-600 text-xl font-bold'>Blogs</li>
                                        <li className='hover:text-blue-600 text-xl font-bold'>Contact Us</li>
                                        <li className='hover:text-blue-600 text-xl font-bold'>{auth.providerId?<Link onClick={handleGoogleSignOut} to='SignIn'>SignOut</Link>:<Link to='SignIn'>SignIn</Link>}</li>
                                        <li className='hover:text-orange-600 text-2xl font-bold'><Link to='Appoinment'>Book An Appoinment</Link></li>
                                    
                                    </ul>
                                
                                </Drawer>
                            </label> 
                                
                        </div>
                    
                </div>
            </nav>
            </>
        );
    };

    export default Header;