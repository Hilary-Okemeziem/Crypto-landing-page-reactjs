import React from 'react'
import NavLogo from '../images/logo.png'
import { Link } from 'react-scroll';
import visa from '../images/Visa.png'
import Mastercard from '../images/Mastercard.png'
import Bitcoin from '../images/Bitcoin.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'

const Footer = () => {
  return (
    <div className='max-w-[1200px] px-2 m-auto pt-16'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Link to="hero" smooth={true} offset={50} duration={500}>
                <div className='flex items-center'>
                    <img src={NavLogo} alt="/" width={40} className='cursor-pointer'/> 
                    <h1 className='ml-4 text-xl cursor-pointer'>CRAPPO</h1>               
                </div>
            </Link>

            <div>
                <h2 className='font-bold'>Quick Links</h2>
                <ul className='py-4'>
                    <li className='py-2 cursor-pointer text-sm hover:text-[#3671E9]'>Home</li>
                    <li className='py-2 cursor-pointer text-sm hover:text-[#3671E9]'>Products</li>
                    <li className='py-2 cursor-pointer text-sm hover:text-[#3671E9]'>About</li>
                    <li className='py-2 cursor-pointer text-sm hover:text-[#3671E9]'>Features</li>
                    <li className='py-2 cursor-pointer text-sm hover:text-[#3671E9]'>Contact</li>
                </ul>
            </div>

            <div>
                <h2 className='font-bold'>Resources</h2>
                <ul className='py-4'>
                    <li className='py-2 cursor-pointer text-sm hover:text-[#3671E9]'>Download Whitepapper</li>
                    <li className='py-2 cursor-pointer text-sm hover:text-[#3671E9]'>Smart Token</li>
                    <li className='py-2 cursor-pointer text-sm hover:text-[#3671E9]'>Blockchain Explorer</li>
                    <li className='py-2 cursor-pointer text-sm hover:text-[#3671E9]'>Crypto API</li>
                    <li className='py-2 cursor-pointer text-sm hover:text-[#3671E9]'>Interest</li>
                </ul>
            </div>

            <div className='flex flex-col'>
                <h3 className='text-2xl font-bold'>We accept following payment systems</h3>
                <div className='flex items-center justify-between'>
                    <div>
                        <img src={visa} alt="" />
                    </div>
                    <div className='p-4'>
                        <img src={Mastercard} alt="" />
                    </div>
                    <div>
                        <img src={Bitcoin} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-between flex-wrap gap-4 py-8'>
            <div>
                <p className='text-sm'>&copy;2022. Inspired by Codingossy. Built by Hilary</p>
            </div>
            <div className='flex items-center justify-between'>
                <img src={facebook} alt="" className='mr-4' />
                <img src={instagram} alt="" className='mr-4' />
                <img src={youtube} alt=""  className='mr-4'/>
                <img src={twitter} alt="" className='mr-4' />
                <img src={linkedin} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer