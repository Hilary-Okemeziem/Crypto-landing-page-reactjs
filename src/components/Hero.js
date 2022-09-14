import React from 'react'
import hero from '../images/Illustration.png'
import {MdChevronRight} from 'react-icons/md'
import {Roll} from 'react-reveal'

const Hero = () => {
  return (
    <div id='hero' className='max-w-[1200px] px-2 m-auto py-16 pt-[4rem] h-screen'>
        <div className='relative hidden lg:flex'>
            <div className='flex items-center justify-between w-full'>
                <div>
                    <div className='bg-white/5 p-1 rounded-full flex items-center w-[22rem] animate__animated animate__fadeInLeft animate__slow'>
                        <button className='bg-white text-black py-1 px-2 rounded-full'>
                            75% SAVE
                        </button>
                        <p className='ml-4'>For the Black Friday weekend</p>
                    </div>
                    <h1 className='text-5xl py-5 font-bold w-[30rem] animate__animated animate__fadeInLeft animate__delay-2s animate__slow'>Fastest & secure platform to invest in crypto</h1>
                    <p className='py-2 text-md animate__animated animate__fadeInLeft animate__delay-3s animate__slow'>Buy and sell cryptocurrencies, trusted by 10M wallets <br/> with over $30 billion in transactions.</p>
                    <button className='bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer animate__animated animate__fadeInLeft animate__delay-4s animate__slow'>
                        <div className='flex items-center justify-between'>
                            <p className='cursor-pointer'>Try for FREE</p>
                            <div className='bg-white p-2 ml-5 rounded-full text-[#3671E9]'>
                                <MdChevronRight />
                            </div>
                        </div>
                    </button>
                </div>
                <Roll duration={4000}>
                    <div className='pr-[2rem]'>
                        <img src={hero} alt="/" />
                    </div>
                </Roll>
            </div>
            <div className='w-[60rem] h-[5.5rem] bg-gradient-to-l from-white/5 absolute top-[35rem] right-[18rem] hidden lg:block -skew-y-[24deg] skew-x-[24deg]'></div>
            <div className='w-[35rem] h-[5.5rem] bg-gradient-to-r from-white/5 absolute top-[34rem] right-[-6rem] hidden lg:block -skew-y-[24deg] skew-x-[24deg]'></div>
        </div>

        <div className='hero-section lg:hidden'>
            <div className='pb-[10rem]'>
                <div className='bg-white/5 p-1 rounded-full flex items-center w-[22rem]'>
                    <button className='bg-white text-black py-1 px-2 rounded-full animate__animated animate__fadeInLeft animate__slow'>
                        75% SAVE
                    </button>
                    <p className='ml-4'>For the Black Friday weekend</p>
                </div>
                <h1 className='text-4xl py-5 font-bold animate__animated animate__fadeInLeft animate__delay-2s animate__slow'>Fastest & secure platform to invest in crypto</h1>
                <p className='py-2 text-md animate__animated animate__fadeInLeft animate__delay-3s animate__slow'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
                <button className='bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer animate__animated animate__fadeInLeft animate__delay-4s animate__slow'>
                    <div className='flex items-center justify-between'>
                        <p className='cursor-pointer'>Try for FREE</p>
                        <div className='bg-white p-2 ml-5 rounded-full text-[#3671E9]'>
                            <MdChevronRight />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero