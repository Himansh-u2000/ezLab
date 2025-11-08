import mandala from '../assets/mandala.png';
import logo from '../assets/logo.png';

export default function Hero() {
  return (
    <div className='flex flex-col flex-wrap md:flex-row items-center justify-center px-4'>
      <div className="md:w-1/2 flex  md:items-center justify-center ">
        <div className="relative md:w-[565px] md:h-[565px] w-xs h-xs ">
          <img
            src={mandala}
            alt="mandala design"
            className="sm:w-full sm:h-full"
          />

          <img
            src={logo}
            alt="logo"
            className="absolute inset-0 m-auto sm:w-[388px] w-26 h-26 sm:h-[150px] z-10"
          />
        </div>

      </div>
      <div className="md:w-1/2 flex flex-col justify-start">
        <div className="md:w-3xl flex flex-col justify-center gap-6 items-center">
          <h1 className='text-[#0F3255] island-moments-regular text-2xl md:text-8xl text-center'>
            Varnan is where stories find their voice and form
          </h1>
          <h2 className='text-[#F15D2B] text-lg md:text-2xl'>Films . Brands . Art</h2>
          <p className='md:text-sm text-xs text-center'>Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
            Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
            V doesn’t just tell stories - V honors them.
          </p>
        </div>
      </div>
    </div>
  )
}
