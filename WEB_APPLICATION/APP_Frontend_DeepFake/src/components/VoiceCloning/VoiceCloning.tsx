import React, {useState, useRef} from 'react'

import { Button } from "@material-tailwind/react"

function VoiceCloning() {
  const [filename, setFilename] = React.useState("No file Chooses")
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [mediaRecorder, setMediaRecorder] = useState(null)
  const [audioURL, setAudioURL] = useState(null)

  const chunksRef = useRef([])
  const timerRef = useRef(null)

  function useFileNameChange(e){
    const file = e.target.files[0]
    if (file){
      setFilename(file.name)
    }else{
      setFilename("No file Chooses")
    }
  }


  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
        clearInterval(timerRef.current)
      };

      recorder.start()
      setMediaRecorder(recorder)
      setIsRecording(true)

      timerRef.current = setInterval(() => {
        setRecordingTime(prevTime => prevTime + 1);
      }, 1000);

      
    } catch (error) {
      console.error('Error accessing the microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
     
      mediaRecorder.stop()
      setIsRecording(false)
    }
  };

  const resetRecording = () => {
    setIsRecording(false);
    setRecordingTime(0);
    chunksRef.current = [];
    setAudioURL(null);
  };

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
            <p className="text-sm text-gray-500 dark:text-gray-300" >Input audio should not be more than 30 sec.</p>

            <div className="flex justify-between mt-10">
              
              <div>
              <div className="mt-1 flex items-center">
                <label className="relative cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                <span>Choose File</span>
                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" 
                onChange={useFileNameChange}/>
                </label>
                <span className='mx-2 px-1 border-2 rounded text-indigo-600'>{filename}</span>
              </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 text-start" id="file_input_help">Upload .mp3 or .wav file.</p>
              </div>

              <div>
                <button className='px-5 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white'>Submit file</button>
              </div>
            </div>
            
            
            <div className='text-center flex flex-col items-center pt-6 pb-2'>
                <div className='w-[50%] bg-gray-400 pt-[2px] rounded'></div>
                <p className='w-16 relative bottom-3 bg-gray-50 px-1 rounded-fill text-gray-600'>OR</p>
            </div>


            {/* === RECORDING === */}
            <div className="max-w-md mx-auto overflow-hidden">

            <div className="">
              {/* <h2 className="text-lg font-semibold mb-4 text-gray-700">Record Voice</h2> */}
              <div className="flex items-center justify-between mb-4">
                {isRecording ? (
                <button onClick={stopRecording} className="bg-red-500 text-white px-4 py-2 rounded-lg ">Stop</button>
                ) : (
                <button onClick={startRecording} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Start Recording</button>
                )}

                <span className="text-gray-600">
                  Record Time: 
                  <span className='text-2xl font-bold text-black'>
                    {` ${recordingTime}  `}</span> 
                  Sec's
                </span>
              </div>

              {audioURL && (
              <div className="mb-4">
                <audio controls src={audioURL}></audio>
              </div>
              )}
              <div className='flex justify-center'>
                
                <button onClick={resetRecording} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Reset Input</button>
              </div>
            </div>

            </div>
            {/* === End of Recording === */}

               

            {/* ======== INPUT ======== */}
                <div className='w-full bg-gray-800 pt-[2px] rounded my-8'></div>
                <div className='my-6 text-start'>
                  <h1 className='text-2xl font-bold '>Input:</h1>
                </div>
            {/* ====== END Input ======== */}


          </div>
      </div>
      
    </div>
  )
}

export default VoiceCloning
