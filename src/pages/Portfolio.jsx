import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'
import cam from '../assets/cam.png'
import rangoliHalf from '../assets/rangoliHalf.png'
import subtract from '../assets/subtract.png'

export default function Portfolio() {
  return (
    <div className='relative h-full'>
      <div className="absolute hidden md:block top-28 left-28">
        <img src={cam} alt="" className='h-96'/>
      </div>

      <div className='flex justify-between items-center text-center flex-col gap-8 font-serif'>
        <div className="mx-auto flex flex-col gap-4">
          <h1 className='text-2xl'>The Highlight Reel</h1>
          <p>Watch the magic we’ve captured.</p>
        </div>

        <div style={{
          backgroundImage: `url(${subtract})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }} className='w-[800px] h-[500px] flex justify-evenly items-center'>
          <button
            onClick={""}
            className="w-20 bg-white h-[330px] px-2 py-4 rounded-md flex items-center justify-center hover:cursor-pointer">
            <img src={arrowLeft} alt="" />
          </button>
          <div className="rounded-md overflow-hidden">
            <iframe width="560" height="330" src="https://www.youtube.com/embed/r_lxE7kF0Fo?si=3ayXxLG9LgNVeeKr&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <button
            onClick={""}
            className="w-20 bg-white h-[330px] px-2 py-4 rounded-md flex items-center justify-center hover:cursor-pointer">
            <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden md:block">
        <img src={rangoliHalf} alt="" className='h-96' />
      </div>
    </div>
  )
}
