import noteClip from '../assets/noteAndClip.png'; 4
import indiaGate from '../assets/indiaGate.svg';
import group from '../assets/Group.svg';
import vector from '../assets/Vector.svg';
import vector1 from '../assets/Vector1.svg';
import vector2 from '../assets/Vector3.svg';
import CommonButton from '../component/CommonButton';
import { useNavigate } from 'react-router-dom';


export default function Team() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="md:absolute top-0 left-40">
        <img src={noteClip} alt="" className='h-96' />
      </div>

      <div className="md:absolute bottom-8 left-24 w-1/2">
        <img src={indiaGate} alt="" className='h-80' />
      </div>

      <div className="absolute top-60 right-80 text-xl indie-flower-regular">
        <span className="absolute bottom-9 -left-60 w-[280px]">
          <img src={vector} alt="" className='w-[150px] mx-auto' />
          <p>Branding Experts</p>
        </span>

        <div className="absolute -top-28 left-24 w-[280px] flex flex-col items-start">
          <p className='w-full'>Film Makers</p>
          <img src={vector1} alt="" className='mx-auto' />
        </div>

        <div className="absolute top-2 w-[280px] -right-80">
          <p className='w-full text-center'>Art Curators</p>
          <img src={vector2} alt="" className='' />
        </div>

        <div className="-bottom-28 right-18 md:absolute flex flex-col items-center gap-4">
          <p>Take a closer look at the stories V bring to life.</p>
          <CommonButton onCLick={() => navigate("/portfolio")}>View Portfolio</CommonButton>
        </div>

        <img src={group} alt="" className='' />
      </div>
    </div>
  )
}
