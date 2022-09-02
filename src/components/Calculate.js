import React from 'react'
import Trade from './Trade'
import { Slide, Zoom} from 'react-reveal'

const Calculate = () => {
  return (
    <div className='relative'>
        <div className='max-w-[1200px] px-2 mx-auto pt-16 pb-[10rem]'>
            <div className='flex flex-col items-center justify-center'>
                <Slide duration={2000}>
                    <h2 className='text-4xl font-bold text-center'>Check how much you can earn</h2>                    
                </Slide>
                <Zoom duration={2000}>
                    <p className='pt-4'>Let's check your hash rate to see how much you will earn today,</p>
                    <p>Exercitation veniam consequat sunt nostrud amet.</p>
                </Zoom>
            </div>
        </div>
        <Trade/>
        <div className='max-w-[1200px] px-2 mx-auto'>
            <div className='flex items-center justify-center'>
                <div className='bg-[#ffffff] w-[22rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] text-[#0D0D2B] rounded-xl p-4 shadow-lg absolute top-[17rem] md:top-[12rem]'>
                    <form>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between py-4'>
                            <div className='py-4'>
                                <input type="text" placeholder='Enter your harsh rate' className='border-b border-b-gray-400 w-[20rem]' />
                            </div>

                            <div className='py-4'>
                                <select name="" className='w-[10rem] border-b border-b-gray-400 '>
                                    <option value="">TH/s</option>
                                    <option value="">H/s</option>
                                    <option value="">KH/s</option>
                                    <option value="">MH/s</option>
                                    <option value="">GH/s</option>
                                </select>
                            </div>
                            
                            <button className='bg-[#3671E9] rounded-full px-5 py-3 shadow-lg cursor-pointer mt-4 lg:mt-0'>Calculate</button>
                        </div>
                    </form>
                    <div className='flex flex-col py-4'>
                        <p className='uppercase text-[#3671E9] py-2'>ESTIMATED 24 HOUR REVENUE:</p>
                        <h3 className='text-3xl font-bold text-[#0D0D2B] py-2'>
                            0.055 130 59 ETH <span className='text-[#3671E9]'>($1275)</span>
                        </h3>
                        <p className='text-[#828282] py-2 text-sm'>Revenue will change based on mining difficulty and Ethereum price.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculate