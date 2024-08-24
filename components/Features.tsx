import { FEATURES } from '@/constants'
import Image from 'next/image'

const Features = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 mb-20'>
      <div className='max-container padding-container relative w-full flex justify-end'>
       {/*Left Side*/}
       <div className='flex flex-1 ml-20'>
        <Image 
          src="/phone.png"
          alt="phone"
          width={440}
          height={500}
          className='feature-phone'
          />
        </div>
        {/*right Side*/}
        <div className=' z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative mt-20'>
            <Image
             src="/camp1.png"
             alt="camp"
             width={50}
             height={50}
             className='absolute left-[-5px] top-[-32px] w-16 rounded-full lg:w-[50px]'           
            />
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          </div>
          <ul className='mt-5 grid gap-10 md:grid-cols-2 2xl:gap-20'>
            {FEATURES.map((feature) =>( 
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}

              />
            )) }
          </ul>
        </div> 
      </div>      
    </section>  

  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({title, icon, description} :FeatureItem) => {
  return(
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-5 bg-green-50'>
        <Image
         src={icon}
         alt="map"
         width={28}
         height={28}        
        />
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h2>
      <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>{description}</p>
    </li>
    

  )
}

export default Features