import { useState } from 'react'
import icon1 from '../assets/services/icons/ArtCurationIcons01.svg'
import icon2 from '../assets/services/icons/ArtCurationIcons02.svg'
import icon3 from '../assets/services/icons/ArtCurationIcons03.svg'
import icon4 from '../assets/services/icons/ArtCurationIcons04.svg'
import icon5 from '../assets/services/icons/BrandingVector01.svg'
import icon6 from '../assets/services/icons/BrandingVector02.svg'
import icon7 from '../assets/services/icons/BrandingVector03.svg'
import icon8 from '../assets/services/icons/BrandingVector04.svg'
import icon9 from '../assets/services/icons/Camera01.png'
import icon10 from '../assets/services/icons/Camera02.svg'
import icon11 from '../assets/services/icons/Camera03.svg'
import icon12 from '../assets/services/icons/Camera04.svg'
import arrow from '../assets/services/icons/Arrow.png'
import img1 from '../assets/services/img1.png'
import img2 from '../assets/services/img2.png'
import img3 from '../assets/services/img3.jpg'
import Heading from './Heading'


export default function ServiceLayout() {
  const data = [
    {
      img: img1,
      icons: [icon9, icon10, icon11, icon12],
      heading: `"Filmmaking is a chance to live many lifetimes." - Robert Altman`,
      subHeading: `Film Production`,
      desc: `Who says films are just an escape?
We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.`,
      desc2: `V crafts:`,
      points: ["Documentaries", "Corporate Videos", "2D Animation Videos", "3D Animation Videos"]
    },
    {
      img: img2,
      icons: [icon5, icon8, icon7, icon6],
      heading: `A brand is a voice, and a product is a souvenir." - Lisa Gansky`,
      subHeading: `Branding`,
      desc: `A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.
We shape brands that people remember, return to, and fall in love with.`,
      desc2: `V creates:`,
      points: ["Branding & Communication", "Market Mapping", "Content Management", "Social Media Management", "Rebranding"]
    },
    {
      img: img3,
      icons: [icon3, icon4, icon1, icon2],
      heading: `"V take art where it belongs, to the people.” - Vernita Verma`,
      subHeading: `Art Curation`,
      desc: `Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
Through every festival, every performance, and every gathering, we help stories find their stage and their people.`,
      desc2: `V creates:`,
      points: ["Art Festivals", "Live Performances", "Community Events", "Cultural Storytelling"]
    },
  ]

  const [currentDataIndex, setCurrentDataIndex] = useState(0);

  const handlePrev = () => {
    setCurrentDataIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentDataIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <div className='md:h-screen h-full flex flex-col justify-center'>
      <Heading text={`"Filmmaking is a chance to live many lifetimes." - Robert Altman`} />
      {data[currentDataIndex] && (
        <div className="p-2 mx-auto md:w-7xl relative">
          <div className="relative">
            <button className='rounded-full flex border-2 border-[#F15D2B] py-2 px-4 gap-2 items-center justify-center text-[#F15D2B] hover:cursor-pointer' onClick={handlePrev}>
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.25 13.25L1.25 7.25L7.25 1.25" stroke="#F15D2B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Prev
            </button>
            <div className="mx-auto grid md:grid-cols-12 md:w-4/5 instrument-sans-font md:text-lg">
              <div className="md:col-span-4 p-4">
                <div className="px-2 pt-2 bg-white min-h-[300px] flex flex-col gap-4 pb-4 shadow-xl">
                  <img src={data[currentDataIndex].img} alt="img" className='md:w-full h-[300px] object-cover' />
                  <h2 className='text-center text-lg font-serif'>{data[currentDataIndex].subHeading}</h2>
                </div>
              </div>
              <div></div>
              <div className="md:col-span-6 p-4 text-lg">
                <p className='text-wrap'>{data[currentDataIndex].desc}</p>
                <p>{data[currentDataIndex].desc2}</p>
                <ul className='translate-x-6 list-disc'>
                  {data[currentDataIndex].points.map((point) => (<li>{point}</li>))}
                </ul>
              </div>
            </div>

            <div className="md:mt-8 mt-2">
              <button className='flex flex-col mx-auto md:text-2xl text-base hover:cursor-pointer items-center text-[#0F3255] instrument-sans-font' onClick={handleNext}>
                <span>Explore</span>
                <img src={arrow} alt="arrow img" className='w-20' />
              </button>
            </div>
          </div>

          <div className="absolute top-0 right-4 md:block hidden">
            <img src={data[currentDataIndex].icons[0]} alt="icon 1" className='w-24 h-24' />
          </div>

          <div className="absolute top-52 right-36 md:block hidden">
            <img src={data[currentDataIndex].icons[2]} alt="" className='w-24 h-24' />
          </div>

          <div className="absolute bottom-20 right-4 md:block hidden">
            <img src={data[currentDataIndex].icons[1]} alt="" className='w-36 h-36' />
          </div>

          <div className="absolute bottom-20 left-4 md:block hidden">
            <img src={data[currentDataIndex].icons[3]} alt="" className='w-24 h-24' />
          </div>
        </div>
      )}
    </div>
  )
}
