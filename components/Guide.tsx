import Image from 'next/image'
import React from 'react'

export const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24'>
        <Image 
          src="/camp1.png" 
          alt="camp"
          width={80}
          height={80}          
          />
          <p className='uppercase regular-18 -mt-4 mb-3 text-green-50'>
            We are here for you
          </p>

          <div className='flex flex-wrap justify-between gap-5 lg:gap-10' >
            <h2 className='bold-40 lg:bold-64 xl:max-w-[398px]'>
              Guiding You to Easy Paths 
            </h2>
            <p className='rounded-5xl p-5 pt-10 shadow-2xl regular-16 text-gray-30 xl:max-w-[520px]'>
              Only with the Travel Guide application will you no longer get lost in your adventure.
              You can use our application when exploring or climbing, yes offline maps you can use at any time 
              there is no signal at the location. Invite your friends, relatives and family to have fun with you
              in the wilderness without fear of getting lost, as you walk through valleys or climb mountains.
            </p>
          </div>
      </div>
      <div className='flexCenter max-container relative w-full'>
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className='w-full object-cover object-center xl:rounded-5xl xl:mx-12'
        />
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl
        border shadow-md md:left-[5%] lg:top-20'>
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className='h-full w-auto'
            />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>
                  Destination
                </p>
                <p className='bold-16 text-green-50'>
                  2 Hours
                </p>
              </div>
              <p className='bold-20 mt-2'>
                Maletsunyane Falls
              </p>
            </div>

            <div className='flex w-full flex-col'>              
              <p className='regular-16 text-gray-20'>
                Start Track
              </p>              
              <h4 className='bold-20 mt-2 whitespace-nowrap'>
                Maseru
              </h4>
            </div>

          </div>
        </div>

      </div>


    </section>
  )
}
