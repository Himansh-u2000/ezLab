import React from 'react'
import Heading from '../component/Heading'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import tape from '../assets/tapeImage.png'
import borderRibbon from '../assets/borderRibbon.png'
import ServiceLayout from '../component/ServiceLayout'

export default function Services() {
  return (
    <>
      <div className='h-[100vh-135px]'>
        <Heading text="The storyboard reveals the breadth of our craft." />
        <div className="relative">
          <div className="mx-auto py-18 flex md:flex-row flex-col justify-center md:gap-20 md:w-4/5 items-end ">
            <div className="px-2 pt-2 rotate-12 bg-white shadow-md ">
              <img src={client1} alt="" className='object-cover h-80 w-60' />
              <h2 className='py-4 text-center'>Film Production</h2>
            </div>
            <div className="px-2 pt-2  bg-white shadow-md md:rotate-0 -rotate-3  md:translate-y-12">
              <img src={client2} alt="" className='object-cover h-80 w-60' />
              <h2 className='py-4 text-center'>Branding</h2>
            </div>
            <div className="px-2 pt-2 -rotate-12 bg-white shadow-md ">
              <img src={client3} alt="" className='object-cover h-80 w-60' />
              <h2 className='py-4 text-center'>Art Curation</h2>
            </div>
          </div>

          <div className="absolute top-2 left-1/5 -rotate-2 md:block hidden">
            <img src={tape} alt="tape image" className='w-48' />
          </div>

          <div className="absolute top-18 left-[45%] -rotate-2 md:block hidden">
            <img src={tape} alt="tape image" className='w-48' />
          </div>

          <div className="absolute top-2 right-1/5 rotate-24 md:block hidden">
            <img src={tape} alt="tape image" className='w-48' />
          </div>
        </div>
        <div className="mb-8">
          <img src={borderRibbon} alt="border" className='w-full' />
        </div>
      </div>
      <ServiceLayout />
    </>
  )
}
