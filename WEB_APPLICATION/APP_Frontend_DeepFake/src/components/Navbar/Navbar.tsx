// import React from 'react'
import { Button } from "@material-tailwind/react"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="h-14 w-full sticky top-0 z-10 border-box px-8 xl:px-20 bg-gray-300">
        <div className="h-full w-full flex justify-between items-center">

            {/* Logo */}
            <div id="Logo" className="flex space-x-2">
                <h1 className="text-xl font-bold">Deep Cloning</h1>
                <h1 className="px-3 py-0.5 bg-indigo-700 rounded text-white font-bold">AI</h1>
            </div>

            {/* Menu Buttons */}
            <ul className="hidden lg:flex space-x-8  text-base font-bold">
                <NavLink to={"/"} className={({isActive})=> `${isActive ? 'text-indigo-800': 'text-slate-900'}`}>Home</NavLink>

                <NavLink to={"textSpeech"} className={({isActive})=> `${isActive ? 'text-indigo-800': 'text-slate-900'}`}>Text-To-Speech</NavLink>

                <NavLink to={"voiceCloning"} className={({isActive})=> `${isActive ? 'text-indigo-800': 'text-slate-900'}`}>VoiceCloning</NavLink>

                <NavLink to={"aboutUs"} className={({isActive})=> `${isActive ? 'text-indigo-800': 'text-slate-900'}`}>About Us</NavLink>

                <NavLink to={"contactUs"} className={({isActive})=> `${isActive ? 'text-indigo-800': 'text-slate-900'}`}>Contact Us</NavLink>
                
            </ul>

            {/* Login SignUp */}
            <div className="hidden lg:flex space-x-2">
                <Button variant="outlined" placeholder={''} size="sm">Login</Button>
                <Button variant="filled" placeholder={''} size="sm"  className="bg-indigo-800">SignUp</Button>
            </div>

            {/* Hamburgur Icon */}
            <div className="block lg:hidden text-3xl cursor-pointer text-indigo-800">
                &#9776;</div>

        </div>
      
    </div>
  )
}

export default Navbar
