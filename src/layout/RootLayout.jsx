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
      <div className="h-[calc(100vh-104px)]">
        <Outlet />
      </div>
    </div>
  )
}
