import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import NavLogo from '../images/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  const changeNavbg = () => {
    if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
  }

  window.addEventListener('scroll', changeNavbg)

  return (
    <div className={
        navBg ? 
          'fixed w-full h-20 shadow-xl z-[100] bg-[#0D0D2B] ease-in-out duration-300'
          : 
          'fixed w-full h-20 z-[100]'
      }>
        <div className='flex justify-between items-center w-full h-full max-w-[1200px] m-auto px-2'>
            <Link to="hero" smooth={true} offset={50} duration={500}>
                <div className='flex items-center py-2'>
                    <img src={NavLogo} alt="/" width={40} className='cursor-pointer'/> 
                    <h1 className='ml-4 text-xl cursor-pointer'>CRAPPO</h1>               
                </div>
            </Link>  
            
            <div>
                <ul className='hidden md:flex'>
                    <li className='ml-10 py-2 text-sm hover:font-bold cursor-pointer hover:text-[#3671E9]'>
                            Products
                    </li>
                    <li className='ml-10 py-2 text-sm hover:font-bold cursor-pointer hover:text-[#3671E9]'>
                            Features
                    </li>
                    <li className='ml-10 py-2 text-sm hover:font-bold cursor-pointer hover:text-[#3671E9]'>
                            About
                    </li>
                    <li className='ml-10 py-2 text-sm hover:font-bold cursor-pointer hover:text-[#3671E9]'>
                            Contact
                    </li>
                    <li className='ml-10 py-2 text-sm hover:font-bold cursor-pointer hover:text-[#3671E9]'>
                        Login
                    </li>
                    <li className='ml-5 py-2 text-sm hover:font-bold'>
                            |
                    </li>
                    <li className='ml-5 text-sm hover:font-bold cursor-pointer bg-[#3671E9] px-4 py-2 rounded-full'>
                            Register
                    </li>
                </ul>

                {/* Hamburger Icon */}
                <div
                    onClick={handleNav}
                    className='md:hidden z-10'
                >
                    <AiOutlineMenu size={25} color={'white'} />
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div className={
            nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>

        {/* Side Drawer Menu */}
            <div className={
                nav
                ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0D0D2B] p-4 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-4 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between '>
                        <Link onClick={() => setNav(false)} to="hero" smooth={true} offset={50} duration={500}>
                            <div className='flex items-center py-2'>
                                <img src={NavLogo} alt="/" width={40} className='cursor-pointer'/> 
                                <h1 className='ml-4 text-xl'>CRAPPO</h1>               
                            </div>
                        </Link>
                        
                        <div
                            onClick={handleNav}
                            className='rounded-full shadow-sm shadow-black p-3 cursor-pointer'
                        >
                            <AiOutlineClose />
                        </div>
                    </div>

                    <div className='border-b border-gray-300 my-3'>
                        <p className='w-[85%] md:w-[90%] py-3'>
                            Let's trade crypto together
                        </p>
                    </div>
                </div>

                <div className='py-2 flex flex-col'>
                    <ul className='uppercase'>
                        <li className='py-4 text-sm'>
                            <Link onClick={() => setNav(false)}>
                                Products
                            </Link>
                        </li>

                        <li className='py-4 text-sm'>
                            <Link onClick={() => setNav(false)}>
                                Features
                            </Link>
                        </li>

                        <li className='py-4 text-sm'>
                            <Link onClick={() => setNav(false)}>
                                About
                            </Link>
                        </li>

                        <li className='py-4 text-sm'>
                            <Link onClick={() => setNav(false)}>
                                Contact
                            </Link>
                        </li>

                        <li className='py-4 text-sm'>
                            <Link onClick={() => setNav(false)}>
                                Login
                            </Link>
                        </li> 

                        <li className='py-4 text-sm'>
                            <Link onClick={() => setNav(false)}>
                                Register
                            </Link>
                        </li>   
                    </ul>

                    <div>
                        <p className='uppercase tracking-widest text-[#3671E9] pt-8'>
                            Connect With Us
                        </p>

                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-sm shadow-black p-3'>
                                <FaLinkedinIn />
                            </div>
                        
                            <div className='rounded-full shadow-sm shadow-black p-3'>
                                <FaGithub />
                            </div>
                            
                            <div className='rounded-full shadow-sm shadow-black p-3'>     
                                <AiOutlineMail />
                            </div>
            
                            <div className='rounded-full shadow-sm shadow-black p-3'>
                                <FaFacebook />
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;