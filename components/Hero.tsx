import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container 
    flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row
     xl:row ">
      <div className="hero-map" />

      {/*LEFT SECTION */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp-no-bg.png" 
          alt="camp" 
          width={150} 
          height={150}
          className="absolute left-[-10px] top-[-42px] w-20 lg:w-[125px]" 
          />
          <h1 className="bold-52 lg:bold-88">Travel Safely with us</h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            We provide a solution for your adventure problems. A chance to be able to use our application when touring, even when in remote, out-of-reach locations. Yes offline maps you can use at any time there is no signal at the location.
            Premium services in the palm of your hands.
          </p>

          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5).fill(1).map((_, index) => (
                <Image                   
                  src="/star.svg" 
                  key={index}
                  alt="star" 
                  width={24} 
                  height={24}
                  />
              ))}
            </div>
            <p className='bold-16 lg:bold-20 text-blue-70'>
              (5.0)
              <span className='regular-16 lg:regular-20 ml-1'>Excellent </span>
            </p>            
          </div>

          <div className="flex flex-col w-full gap-3 sm:flex-row ">
              <Button 
              type="button"
              title="Download App"
              variant="btn_green"
              />
              <Button 
              type="button"
              title="How we work?"
              icon="/play.svg"
              variant="btn_white"
              />
          </div>
      </div>

      <div className="relative flex mt-10 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 opacity-90 px-7 py-8">
              
              <div className="flex flex-col">
                <div className="flexBetween">
                  <p className="regular-16 text-gray-20">Location</p>
                  <Image 
                  src="/close.svg"
                  alt="close"
                  width={24}
                  height={24}
                  />
                </div>
                <p className="bold-20 text-white">Ts'ehlanyane Park</p>
              </div>

              <div className="flexBetween">
                <div className='flex flex-col'>
                  <p className="regular-16 block text-gray-20">Distance</p>
                  <p className="bold-20 text-white">5.507 km</p>
                </div>

                <div className='flex flex-col'>
                  <p className="regular-16 block text-gray-20">Elevation</p>
                  <p className="bold-20 text-white">1.204 km</p>
                </div>
              </div>
        </div>
      </div>

      {/*RIGHT SECTION */}
    </section>
  )
}

export default Hero