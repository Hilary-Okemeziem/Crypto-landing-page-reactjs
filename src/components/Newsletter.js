import React from 'react'
import vector from '../images/Vector.png'
import vector1 from '../images/Vector1.png'

const Newsletter = () => {
  return (
    <div className='bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] py-16'>
        <div className='max-w-[1200px] px-2 mx-auto'>
            <div className='flex items-center justify-center'>
                <div className='bg-[#3671E9] px-4 py-8 w-[60rem] rounded-lg relative'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 items-center'>
                        <div>
                            <h3 className='text-3xl font-bold py-2'>Start mining now</h3>
                            <p className='py-2'>Join now with CRAPPO to get the latest news and start mining now</p>
                        </div>

                        <div>
                            <form>
                                <div className='py-4'>
                                    <input type="text" placeholder='Enter your harsh rate' className='border-b border-b-[#ffffff] w-[20rem]  bg-transparent placeholder-[#ffffff]' />
                                </div>
                            </form>
                        </div>

                        <div>
                            <button className='bg-[#ffffff] text-[#0D0D2B] rounded-full px-5 py-3 shadow-lg cursor-pointer mt-4 lg:mt-0 lg:ml-[5rem]'>Subscribe</button>
                        </div>
                    </div>

                    <div className='absolute top-0'>
                        <img src={vector} alt="" />
                    </div>
                    <div className='absolute right-0 bottom-0'>
                        <img src={vector1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter