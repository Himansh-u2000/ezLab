import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import close from '../assets/cross.png';
import hamburger from '../assets/hamburgerIcon.png';
import logo from '../assets/logo.png';
import CommonButton from './CommonButton';

export default function Header() {
  const links = [
    { name: 'Services', path: '/services' },
    { name: 'Thier Stories', path: '/team' },
    { name: 'Our Story', path: '/about' },
    { name: 'Varnan', path: '/portfolio' },
  ]

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <header className='flex justify-between md:px-16 px-4 w-full py-8 gap-8 z-30'>
      <div className="w-xs h-18">
        {!isHome && (
          <Link to="/">
            <img src={logo} alt="" className='w-[100px] hover:cursor-pointer' />
          </Link>
        )}
      </div>

      <div className="flex md:flex-row flex-col-reverse gap-8 md:items-center items-end justify-center">
        <nav className={`items-center md:flex-row flex-col justify-end gap-4 md:static absolute top-18 z-50 right-14 bg-white md:p-0 px-2 py-4 rounded md:bg-transparent ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex md:flex-row flex-col md:items-center items-start md:space-y-0 space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="text-gray-700 hover:text-gray-900 text-lg mx-2"
                  to={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <CommonButton
            onCLick={() => navigate('/contact')}
            className="flex gap-4 hover:cursor-pointer"
          >
            Let's Talk
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z" fill="white" />
            </svg>

          </CommonButton>
        </nav>

        {isMenuOpen ? (
          <img
            src={close}
            alt="Close Menu"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <img
            src={hamburger}
            alt="Open Menu"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>
    </header>
  )
}
