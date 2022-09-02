import React, { useEffect } from 'react'
import btc from '../images/btc.png'
import eth from '../images/eth.png'
import lit from '../images/lit.png'
import {MdChevronRight} from 'react-icons/md'
import { Flip, Slide, Zoom} from 'react-reveal'

const Trade = () => {
    function reveal() {
        let reveals = document.querySelectorAll('.reveal')


        for (let i = 0; i < reveals.length; i++) {
            let windowheight = window.innerHeight;
            let revealtop = reveals[i].getBoundingClientRect().top;
            let revealpoint = 150
            
            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active')
            }
            else{
                reveals[i].classList.remove('active')
            }
        }
    }
    useEffect (() => {
      window.addEventListener('scroll', reveal);
    }, [])
  return (
    <div className='bg-[#fbfbfb] pt-[15rem] pb-16 md:pt-20'>
        <div className='max-w-[1200px] px-2 mx-auto pt-16'>
            <div className='flex items-center justify-center py-10 reveal'>
                <h2 className='text-4xl font-bold text-[#0D0D2B] w-[45rem] text-center'>Trade securely and market the high growth cryptocurrencies.</h2>
            </div>

            <div className='grid lg:grid-cols-3 gap-16 justify-center items-center'>
                <Zoom duration={2000} bottom left>
                    <div className='py-12 px-5 bg-[#2B076E] rounded-xl shadow-lg'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={btc} alt="/" />
                            <div className='flex py-6'>
                                <h3 className='text-2xl font-bold'>Bitcoin</h3>
                                <p className='ml-1 text-gray-400'>BTC</p>
                            </div>
                            <p className='text-center py-2'>Digital currency in which a record of transactions is maintained.</p>
                            <button className='bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer'>
                                <div className='flex items-center justify-between'>
                                    <p className='cursor-pointer'>Start mining</p>
                                    <div className='bg-white p-2 ml-5 rounded-full text-[#3671E9]'>
                                    <MdChevronRight />
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </Zoom>

                <Flip duration={2000} bottom>
                    <div className='py-12 px-5 bg-[#ffffff] rounded-xl shadow-lg'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={eth} alt="/" />
                            <div className='flex py-6'>
                                <h3 className='text-2xl text-[#0D0D2B] font-bold'>Ethereum</h3>
                                <p className='ml-1 text-gray-400'>ETH</p>
                            </div>
                            <p className='text-center py-2 text-[#828282]'>Blockchain technology to create and run decentralized digital applications.</p>
                            <button className='bg-[#ffffff] text-[#3671E9] rounded-full p-2 mt-4 shadow-sm cursor-pointer border border-gray-400 text-4xl'>
                                    <MdChevronRight />
                            </button>
                        </div>
                    </div>
                </Flip>

                <Slide duration={2000} right>
                    <div className='py-12 px-5 bg-[#ffffff] rounded-xl shadow-lg'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={lit} alt="/" />
                            <div className='flex py-6'>
                                <h3 className='text-2xl text-[#0D0D2B] font-bold'>Litecoin</h3>
                                <p className='ml-1 text-gray-400'>LTC</p>
                            </div>
                            <p className='text-center py-2 text-[#828282]'>Cryptocurrency that enables instant payments to anyone in the world.</p>
                            <button className='bg-[#ffffff] text-[#3671E9] rounded-full p-2 mt-4 shadow-sm cursor-pointer border border-gray-400 text-4xl'>
                                    <MdChevronRight />
                            </button>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    </div>
  )
}

export default Trade