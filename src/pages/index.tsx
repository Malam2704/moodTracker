import Image from 'next/image'
import { Inter } from 'next/font/google'
import LoginForm from '../components/LoginForm'
import { useRouter } from 'next/router';
import { useState } from 'react';
import MyHeader from '../components/MyHeader';

const inter = Inter({ subsets: ['latin'] })
require('dotenv').config();

export default function Home() {


  return (
    <>
      <div>
        <MyHeader />

        <LoginForm />
      </div>
    </>
  )
}
