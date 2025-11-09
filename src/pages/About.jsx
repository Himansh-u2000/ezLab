import noteBg from '../assets/noteBg.png';
import mountain from '../assets/mountain.png';

export default function About() {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center h-fit'>
      <div className="md:w-1/2 flex items-end justify-center p-4 gap-6 flex-col text-center">
        <h1 className='md:text-3xl text-xl font-serif mx-auto'>A montage of familiar faces and names.</h1>
        <p className='md:w-[550px] text-center md:text-base text-xs mx-auto'>Some stories come from the biggest names. Others begin with bold, rising voices.
          We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.</p>
        <div className="md:pt-16 md:mt-16 flex ">
          <div
            style={{
              backgroundImage: `url(${noteBg})`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'cover',
            }}
            className="w-24 md:w-[235px] h-24 md:h-[235px] flex flex-col items-center justify-center gap-4 p-4 rotate-6 relative end-7 shadow-xl">
            <div className='md:text-6xl text-2xl'>85+</div>
            <span className='text-[#F15D2B]'>Projects</span>
          </div>
          <div
            style={{
              backgroundImage: `url(${noteBg})`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'cover',
            }}
            className="w-24 md:w-[235px] h-24 md:h-[235px] flex flex-col items-center justify-center gap-4 p-4 rotate-6 relative end-7 right-12 shadow-xl">
            <div className='md:text-6xl text-2xl'>50+</div>
            <span className='text-[#F15D2B]'>Happpy Clients</span>
          </div>
          <div
            style={{
              backgroundImage: `url(${noteBg})`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'cover',
            }}
            className="w-24 md:w-[235px] h-24 md:h-[235px] flex flex-col items-center justify-center gap-4 p-4 rotate-6 relative end-7 right-14 shadow-xl">
            <div className='md:text-6xl text-2xl'>10+</div>
            <span className='text-[#F15D2B]'>Expert Team</span>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col items-start">
        <h1 className='md:text-6xl text-3xl text-center island-moments-regular w-2xl md:mx-auto mx-4'>
          Every project is more than just a brief - it’s a new chapter waiting to be written.
          Together, we've crafted tales that inspire, connect, and endure.
        </h1>
        <div className="md:fixed bottom-0 right-1/12 md:w-auto">
          <img src={mountain} alt="" className='md:w-3xl mx-auto ' />
        </div>
      </div>
    </div>
  )
}
