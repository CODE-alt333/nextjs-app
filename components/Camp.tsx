import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  description: string;
  peopleParticipating: string
}

const CampSite = ({backgroundImage, title, description, peopleParticipating}: CampProps) => {
  return(
    <div className={`h-full w-full rounded-full ml-4 sm:min-w-[300px] ${backgroundImage} bg-cover bg-no-repeat lg:ml-0 lg:min-w-[900px] lg:rounded-5xl xl:rounded-5xl `}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image 
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
              />
          </div>
          <div className="flex flex-col gap-1 ">
            <h4 className="bold-20 text-white">{title}</h4>
            <p className="regular-16 text-white">{description}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                src={url}
                alt="people"
                width={52}
                height={52}
                className="rounded-full border-2 border-white inline-block h-10 w-10"
              />              
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleParticipating}</p>
        </div>
      </div>
    </div>
  )
  
}

const Camp = () => {
  return (
    <section className='relative flex flex-col py-10 lg:mx-20 2xl:max-container lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[480px] '>
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Maliba Lodge"
          description="Waterfalls, Mountain, Hiking"
          peopleParticipating="100+ per day"
        />
        <CampSite 
        backgroundImage="bg-bg-img-1"
        title="Sight Seeing"
        description="Rockpools, Rivers, Valleys"
        peopleParticipating="100+ per day"
        />
        <CampSite 
        backgroundImage="bg-bg-img-3"
        title="Mountain Viewing"
        description="Sunrise, Sunset, Mountains"
        peopleParticipating="100+ per day"
        />
      </div>
       <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 relative w-full overflow-hidden 
        rounded-3xl lg:max-w-[500px] xl:max-w-[650px] 
        xl:rounded-5xl xl:px-10 xl:py-15 opacity-90">
          <h2 className="regular-24 md:regular-32 lg:regular-48 xl:regular-64 
          capitalize text-white"> 
            <strong>Feeling lost</strong> and not knowing the way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-7 text-white">
            Ever got lost or overwhelmed by getting lost in the unknown, 
            while touring a new place? We are here for you, we provide tailormade 
            solutions for those eager to get out there and explore the world.  
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote" 
          />
        </div>
       </div>

    </section>
  )
}

export default Camp