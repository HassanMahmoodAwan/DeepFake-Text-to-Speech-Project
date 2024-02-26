// import React from 'react'
import { Select, Option, Button } from "@material-tailwind/react";

function TextToSpeech() {
  return (

    <div className="w-full  my-14 ">

    <div className="w-full h-auto box-border  py-5 space-y-4">
      <h1 className="text-center text-3xl font-bold">Text-To-Speech Deep Fake</h1>
      {/* Text to Speech */}
      <div className="w-full block md:flex space-x-3">
            {/* Left Side */}
            <div id="TextArea" className="w-full md:w-[50%] box-border p-5 text-start">
               <label htmlFor="TextBox" className="">Max Words Allowed 1000</label>
               <textarea id="TextBox" typeof="text" rows={9} placeholder="Enter your Mesage here" className="rounded text-base text-gray-800 w-full  placeholder:text-base p-3 shadow-sm shadow-indigo-800" />
            </div>

            {/* Right Side */}
            <div id="Options" className="w-full md:w-[50%] box-border px-5 md:py-10 flex md:flex-col items-end justify-between flex-wrap">
             <div className="w-72 lg:w-96 ">
                <h1 className="mb-1">Select Voice Over</h1>
                <Select color="purple" label="Select Version" placeholder={''} className="bg-white text-black">
                    <Option>Dr Wajahat Qazi</Option>
                    <Option>Muhammad Talha</Option>
                </Select>
             </div>

             <div className="hidden md:block  w-72 lg:w-96 ">
                <h1>Language</h1>
                <Select label="Select Version" placeholder={''} value="English" disabled>
                    <Option>English</Option>
                </Select>
             </div>

             <div className="mt-7">
                <Button variant="filled" placeholder={''} className="bg-indigo-800  w-72 lg:w-96 ">Convert to Speech</Button>
             </div>
            </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row md:justify-between items-center mt-10 space-y-5">
        <div>
            <h1 className="text-2xl font-bold text-center md:text-start">Voice Cloning: Clone your Speech into Given Voices</h1>
            <p className="text-base text-gray-800 text-center md:text-start">Need to Register for using Speech-To-Speech</p>
        </div>

        <div>
            <Button variant="filled" placeholder={''} className="w-52 mb-1 bg-purple-700">SignUp</Button>
            <p className="text-xs text-center">Already Have an Account <span className="text-blue-700">Login!</span></p>
        </div>
    </div>


    </div>
  )
}

export default TextToSpeech
