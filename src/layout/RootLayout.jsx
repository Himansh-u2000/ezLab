import { Outlet } from 'react-router-dom'
import Header from '../component/Header'
import bg from "../assets/bg.png"


export default function RootLayout() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header />
      <div className="min-h-[calc(100vh-135px)]">
        <Outlet />
      </div>
    </div>
  )
}
