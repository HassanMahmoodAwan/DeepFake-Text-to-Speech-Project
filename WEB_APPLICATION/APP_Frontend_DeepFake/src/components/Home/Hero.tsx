// import React from 'react'
import { Button } from '@material-tailwind/react'
import HeroSection_DF from "../../assets/HeroSection_DF.png"

function Hero() {
  return (
    <div className='h-[400px] w-full flex'>
      {/* Left-Side */}
      <div className='lg:w-[50%] h-full w-full text-center lg:text-start'>
        <p className='text-sm mb-3'>DEEP FAKE AI VOICE GENERATOR</p>
        <h1 className='text-3xl font-bold'>The Most Realistic AI Voce Cloning <br /> & Text to Speech for</h1>
        <h1 className='text-3xl font-bold text-indigo-800'>Various Content</h1>

        <p className='text-sm  mt-10 mb-4'>Multiple Voices Available for cloning in English & Urdu.</p>
        
        <Button variant='filled' className='rounded-full bg-indigo-800' placeholder="">Get Started Now!</Button>

      </div>

      {/* Right SIde */}
      <div className='w-[50%] h-full hidden lg:block'>
        <img src={HeroSection_DF} alt="Hero Section Img" className='w-[500px] h-[400px] float-right relative bottom-14 z-0' />
      </div>
    </div>
  )
}

export default Hero
