import React, { useEffect } from 'react'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import chart from '../images/BarChart.png'
import person from '../images/Person.png'
import earth from '../images/Earth.png'

const CountUpSection = () => {
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
        <div className='w-full flex items-center justify-between flex-wrap reveal'>
            <div className='flex items-center py-5 lg:py-0'>
                <div className='bg-white/5 p-4 rounded-full'>
                    <img src={chart} alt="" />
                </div>
                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                    {({ isVisible }) => (
                        <div>
                            {isVisible ? 
                                (<div className='ml-4'>
                                    <div className='text-4xl font-bold'>
                                        $<CountUp end={30} duration={4}/>B
                                    </div>
                                    <p>Digital Currency Exchange</p>
                                </div>
                                )
                                :
                                (<div>
                                    <p className='text-4xl'>0</p>
                                    <p>Digital Currency Exchange</p>
                                </div>)
                                
                            }
                        </div>
                    )}
                </VisibilitySensor>
            </div>

            <div className='flex items-center py-5 lg:py-0'>
                <div className='bg-white/5 p-3 rounded-full'>
                    <img src={person} alt="" />
                </div>
                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                    {({ isVisible }) => (
                        <div>
                            {isVisible ? 
                                (<div className='ml-4'>
                                    <div className='text-4xl font-bold'>
                                        <CountUp end={10} duration={4}/>M+
                                    </div>
                                    <p>Trusted Wallets Investor</p>
                                </div>
                                )
                                :
                                (<div>
                                    <p className='text-4xl'>0</p>
                                    <p>Trusted Wallets Investor</p>
                                </div>)
                                
                            }
                        </div>
                    )}
                </VisibilitySensor>
            </div>

            <div className='flex items-center py-5 lg:py-0'>
                <div className='bg-white/5 p-3 rounded-full'>
                    <img src={earth} alt="" />
                </div>
                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                    {({ isVisible }) => (
                        <div>
                            {isVisible ? 
                                (<div className='ml-4'>
                                    <div className='text-4xl font-bold'>
                                        <CountUp end={195} duration={4}/>
                                    </div>
                                    <p>Countries Supported</p>
                                </div>
                                )
                                :
                                (<div>
                                    <p className='text-4xl'>0</p>
                                    <p>Countries Supported</p>
                                </div>)   
                            }
                        </div>
                    )}
                </VisibilitySensor>
            </div>
        </div>
  )
}

export default CountUpSection