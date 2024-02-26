// import React from 'react'

function TextToSpeech() {
  return (
    <div className="w-full h-auto box-border bg-pink-500 my-14 py-5">
      <h1 className="text-center text-2xl font-bold">Text-To-Speech Deep Fake</h1>
      {/* Text to Speech */}
      <div className="w-full">
            {/* Left Side */}
            <div id="TextArea" className="w-[50%] box-border p-5 text-start">
               <label htmlFor="TextBox" className="">Max Words Allowed 1000</label>
               <textarea id="TextBox" typeof="text" rows={4} placeholder="Enter your Mesage here" className="rounded text-base text-gray-800 w-full h-[150px] placeholder:text-xs p-3 shadow-sm shadow-indigo-800" />
            </div>

            {/* Right Side */}
            <div id="Options" className="w-[50%] box-border p-5"></div>
      </div>
    </div>
  )
}

export default TextToSpeech
