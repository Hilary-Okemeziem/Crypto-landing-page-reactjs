import React from 'react'
import CountUp from './CountUp'
import crappo from '../images/whycrappo.png'
import { Fade, Rotate} from 'react-reveal'

const WhyCrappo = () => {
  return (
    <div className='relative w-full'>
      <div className='max-w-[1200px] px-2 m-auto pt-16 lg:pt-[8rem] pb-[4rem]'>
          <CountUp/>
          <div className='pt-[4rem] grid md:grid-cols-2 gap-8 items-center justify-between w-full'>
              <div className='relative'>
                <Rotate duration={2000}>
                  <img src={crappo} alt="/" />
                </Rotate>
                <div className='w-[30rem] h-[5.5rem] bg-gradient-to-r from-white/5 absolute top-[15rem] left-[-15rem] hidden lg:block -skew-y-[24deg] skew-x-[24deg]'></div>
              </div>
              <Fade duration={2000}>
                <div>
                    <h2 className='text-4xl md:text-5xl font-bold'>Why you should choose CRAPPO</h2>
                    <p className='pt-4 text-md md:w-96'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                    <button className='bg-[#3671E9] rounded-full px-5 py-3 mt-4 shadow-lg cursor-pointer'>Learn More</button>
                </div>
              </Fade>
        </div>
      </div>

      <div className='rounded-br-full rounded-bl-full w-[222px] h-[122px] bg-gradient-to-r from-white/5 absolute hidden top-[14rem] right-2 -skew-y-[24deg] skew-x-[24deg] lg:block'></div>
    </div>
  )
}

export default WhyCrappo