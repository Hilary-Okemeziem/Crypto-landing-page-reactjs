import React, { useEffect } from 'react'
import chart from '../images/Chart.png'
import table from '../images/Table.png'
import statistic from '../images/Statistic.png'
import { Fade, Rotate, Slide, Zoom} from 'react-reveal'


const Market = () => {
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
    <div className='bg-[#2B076E] py-16 relative'>
        <div className='max-w-[1200px] px-2 mx-auto'>
            <div className='flex items-center justify-center py-10'>
                <h2 className='text-4xl font-bold text-center w-[45rem]'>Market sentiments, portfolio, and run the infrastructure of your choice</h2>
            </div>

            <div className='flex items-center justify-between gap-8 flex-wrap py-8 lg:py-4 reveal'>
                <Slide duration={2000} top left>
                    <div>
                        <h3 className='text-3xl font-bold pb-2'>Invest Smart</h3>
                        <p className='py-2 text-[#E0E0E0] md:w-[28rem]'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</p>
                        <button className='bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer'>Learn More</button>
                    </div>
                </Slide>
                <Zoom duration={2000} bottom>
                    <div>
                        <img src={chart} alt="/" className='lg:pt-[3rem]' />
                    </div>
                </Zoom>
            </div>

            <div className='flex items-center justify-between gap-4 flex-wrap-reverse py-8 lg:py-4 reveal'>
                <Fade duration={2000} top>
                    <div>
                        <img src={statistic} alt="/" className='lg:pt-[3rem]' />
                    </div>
                </Fade>
                <div>
                    <h3 className='text-3xl font-bold pb-2'>Detailed Statistics</h3>
                    <p className='py-2 text-[#E0E0E0] md:w-[28rem]'>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
                    <button className='bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer'>Learn More</button>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col items-center justify-between gap-8 py-8 lg:py-4 reveal'>
                <div>
                    <h3 className='text-3xl font-bold pb-2 md:w-[28rem]'>Grow your profit and track your investments</h3>
                    <p className='py-2 text-[#E0E0E0] md:w-[28rem]'>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
                    <button className='bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer'>Learn More</button>
                </div>
                <Rotate duration={2000}>
                    <div className='z-10'>
                        <img src={table} alt="/" className='lg:pt-[3rem]' />
                    </div>
                </Rotate>
            </div>
        </div>
        <div className='rounded-tl-full rounded-bl-full w-[222px] h-[322px] bg-white/5 absolute right-0 bottom-0 hidden lg:block'></div>
        <div className='rounded-br-full rounded-bl-full w-[422px] h-[222px] bg-white/5 absolute top-0 left-[8rem] hidden lg:block'></div>
    </div>
  )
}

export default Market