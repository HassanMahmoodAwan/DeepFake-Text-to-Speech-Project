// import React from 'react'
import AccountAcess from "./AccountAcess"
import AppInfo from "./AppInfo"
import Hero from "./Hero"
import TextToSpeech from "./TextToSpeech"
import UnderHero from "./UnderHero"

function Home() {
  return (
    
    
    <div className="w-full h-full mt-20 box-border px-4 md:px-10 lg:px-28">
    
     
        <Hero />
        <UnderHero />
        <AccountAcess />
        <AppInfo />
        <TextToSpeech />
      
      
    </div>
    
  )
}

export default Home
