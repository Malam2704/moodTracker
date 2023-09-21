import Image from 'next/image'
import { Inter } from 'next/font/google'
import LoginForm from '../../components/LoginForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <nav className='flex items-center justify-start py-4 bg-pink-600 w-full m-0 '>
          <p className='text-white text-4xl font-bold ml-2'>mOOD TRACKER</p>
        </nav>

        <h2 className='text-lg font-semibold m-4 text-center m-20 text-2xl' style={{ fontSize: '24px' }}>
          mOOD TRACKER
        </h2>
        <LoginForm />
      </div>
    </>
  )
}
