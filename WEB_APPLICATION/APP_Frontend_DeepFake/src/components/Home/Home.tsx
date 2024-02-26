// import React from 'react'
import AccountAcess from "./AccountAcess"
import Hero from "./Hero"
import UnderHero from "./UnderHero"

function Home() {
  return (
    <div className="h-full w-full mt-20  flex place-content-center bg-green-400">
      <div className="h-full w-full md:w-[93%] bg-yellow-300">
        <Hero />
        <UnderHero />
        <AccountAcess />
      </div>
      
    </div>
  )
}

export default Home
