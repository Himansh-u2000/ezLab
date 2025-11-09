import stroke from '../assets/stroke.png'

export default function Heading({text}) {
  return (
    <div className='text-center mx-auto flex flex-col justify-center items-center gap-1'>
      <h1 className='md:text-2xl text-lg font-semibold font-serif'>{text}</h1>
      <img src={stroke} alt="pen stroke" />
    </div>
  )
}
