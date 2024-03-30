import React from 'react'

import { Button } from "@material-tailwind/react"

function VoiceCloning() {
  const [filename, setFilename] = React.useState("No file Chooses")

  function useFileNameChange(e){
    const file = e.target.files[0]
    if (file){
      setFilename(file.name)
    }else{
      setFilename("No file Chooses")
    }
  }

  return (
    <div className="box-border my-20 px-28 space-y-10">
      
      {/* HEADING & Highlight */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Transform your Voice in 3 Simple Steps</h1>
        <div className="w-full flex justify-center">
         <p className="text-gray-600 w-[45%]">DeepCloning Transforms your voice in Realistic artist vocals, Esay to use. Your voice not more geneatically predetermine.</p>
        </div>
      </div>

      {/* INPUT AND Recording Files */}
      <div className="flex justify-center">
          <div className="w-[600px] h-auto  bg-gray-50 rounded shadow-lg shadow-indigo-100 text-center px-10 py-8">
            <h1 className="text-xl font-bold">Voice Cloning Model</h1> 

            <div className="flex justify-between mt-10">
              <div>
               
              
              <div className="mt-1 flex items-center">
                <label className="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                <span>Choose File</span>
                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" 
                onChange={useFileNameChange}/>
                </label>
                <span className='mx-2 px-1 border-2 rounded text-indigo-600'>{filename}</span>
              </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 text-start" id="file_input_help">Upload .mp3 or .wav file.</p>

              </div>
              <Button color="green" placeholder={''}>Submit File</Button>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default VoiceCloning
