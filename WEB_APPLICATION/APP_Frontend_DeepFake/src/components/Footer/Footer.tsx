// import React from 'react'
import { IconButton } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="h-[270px] w-full relative bottom-0 border-[1px] border-t-blue-gray-600">
        <div className="h-[255px] w-full  ">
            <div className="h-[210px] w-full px-20 flex">
                {/* Left-Part */}
                <div className="w-[50%] h-full  grid place-content-center space-y-3">
                    <div id="Logo-Footer" className="flex space-x-2 mb-2">
                        <h1 className="text-xl font-bold">Deep Cloning</h1>
                        <h1 className="px-3 py-0.5 bg-indigo-700 rounded text-white font-bold">AI</h1>
                    </div>

                    <p className="w-[350px] text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut expedita quia </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex space-x-2">
                        <IconButton variant="filled" placeholder={''} className="rounded-full bg-blue-900" size="sm">
                            <i className="fab fa-linkedin text-lg" />
                        </IconButton>
                        <IconButton variant="filled" placeholder={''} className="rounded-full bg-blue-800" size="sm">
                            <i className="fab fa-facebook text-lg" />
                        </IconButton>
                        <IconButton variant="filled" placeholder={''} className="rounded-full" size="sm" color="blue">
                            <i className="fab fa-twitter text-lg" />
                        </IconButton>
                        <IconButton variant="filled" placeholder={''} className="rounded-full" size="sm">
                            <i className="fab fa-github text-lg" />
                        </IconButton>
                    </div>
                </div>

                {/* Right Part */}
                <div className="w-[50%] h-full ">
                    <div className="w-full h-full grid place-content-center">
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold">Our Company</h1>
                            <ul className="space-y-1 grid place-content-center">
                                <NavLink to={"/"} className={({isActive})=> `${isActive ? 'text-indigo-800': 'text-slate-900'}`}>Home</NavLink>

                                <NavLink to={"textSpeech"} className={({isActive})=> `${isActive ? 'text-indigo-800': 'text-slate-900'}`}>Text-To-Speech</NavLink>

                                <NavLink to={"voiceCloning"} className={({isActive})=> `${isActive ? 'text-indigo-800': 'text-slate-900'}`}>VoiceCloning</NavLink>

                                <NavLink to={"aboutUs"} className={({isActive})=> `${isActive ? 'text-indigo-800': 'text-slate-900'}`}>About Us</NavLink>

                                <NavLink to={"contactUs"} className={({isActive})=> `${isActive ? 'text-indigo-800': 'text-slate-900'}`}>Contact Us</NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-full h-[45px]  text-center text-base font-bold">CopyRights @ Deep Cloning.AI</div>
        </div>
        
        
        {/* Bottom Line */}
        <div className="h-[15px] relative bottom-0 w-full bg-indigo-900"></div>

    </div>
      
  )
}

export default Footer
