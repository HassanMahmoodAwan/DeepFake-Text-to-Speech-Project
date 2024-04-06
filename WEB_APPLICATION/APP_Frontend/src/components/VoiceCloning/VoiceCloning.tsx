import React, {useState, useEffect, useRef} from 'react'
import {Select, Option, Alert, Button} from "@material-tailwind/react"
import axios from "axios"





function VoiceCloning() {
  const [filename, setFilename] = React.useState("No file uploaded")
  const [inputFile, setInputFile] = useState(null)
  const [uploadFile, setUploadFile] = useState(null)


  
  const [openAlert, setOpenAlert] = useState(false)
  const [alertColor, setAlertColor] = useState<any | string>("yellow")
  const [alertMsg, setAlertMsg] = useState("Alert Message")




  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [mediaRecorder, setMediaRecorder] = useState(null)
  const [audioURL, setAudioURL] = useState(null)

  
  const [input, setInput] = useState("No Input Provided")
  const [Output, setOutput] = useState<JSX.Element | string>("Not Generated...")
  const [showInput, setShowInput] = useState(false)
  const [showOutput, setShowOutput] = useState(false)

  
  const [option, setOption] = useState<string>("Trump")


  const chunksRef = useRef([])
  const timerRef = useRef(null)



  // ===== File Upload and Handling File

  
  function useFileChange(e){
    const file = e.target.files[0]
    if (file){
      setUploadFile(file)
      setFilename(file.name)
    }else{
      setFilename("No file Chooses")
    }
  }
  
  async function handleFile(){
    if (uploadFile){
      try {
        const formData = new FormData();
        formData.append('file', uploadFile);

        // Note: to Server.
        await axios.post('/file/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        
        if (!openAlert){
          setAlertColor("green")
          setAlertMsg(" File Uploaded Successfully! ")
          setOpenAlert(true)
        }
        setShowInput(prev=>!prev)

      } catch (error) {
        console.error('Error uploading file:', error)
        // alert('Error uploading file. Please try again.')
        if (!openAlert){
          setAlertColor("red")
          setAlertMsg(" Error Uploading File! ")
          setOpenAlert(true)
        }
      } 

    }
    else {
      if (!openAlert){
        setAlertColor("red")
        setAlertMsg(" File Not Provided! ")
        setOpenAlert(true)
      }
      setInputFile(
      <div className='text-red-500 text-lg text-center'>
          File Not Provided !
      </div>)
    }
  }
  // ======= End of FIle Handling ========

  // =======Input USE-Effect =======
  useEffect(()=>{     
    if (showInput && uploadFile){
      setInputFile(
        <audio controls>
          <source src={`http://localhost:3000/audio/${uploadFile.name}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> )
        
    }else {
      setInputFile("Provide Audio ....")
    }
    
    setShowInput(true)
  }, [showInput])
  // =============================== //



  
  // ====== REcording Audio =========== 

  const sendRecording = async (blob, fileDate)=>{
    
    const formData = new FormData();
    formData.append('file', blob, `A${fileDate}.mp3` );
    
    try{
    // Note: to Server.
    const response = await axios.post('/file/upload', formData, {
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'audio/mpeg'
      }
    });
    
    // const response = await fetch('/file/upload', {
    //   method: 'POST',
    //   body: formData,
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // });

    // if (response.ok){
    //   alert("Uploaded Successful !")
    // }else {
    //   alert("Error")
    // }
    alert("Uplaoded successfull")

  }catch (error) {
    console.error('Error uploading file:', error)
    alert('Error uploading file. Please try again.')
  } 
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

      if (recorder.state === 'inactive'){

      
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/mp3' })
        const url = URL.createObjectURL(blob);
        const fileDate = Date.now()
        sendRecording(blob, fileDate)
        setUploadFile(fileDate)

        setShowInput(prev=>!prev)
        setInputFile(
            <audio controls>
            <source src={url} type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>  
        )

        clearInterval(timerRef.current)
      }
    }



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
  }



  // ============ OUTPUT ===========
  async function generateOutput(){
    try {
      await fetch('/file/option', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: option,
      })
      setOutput("Loading Generated Audio!")
      setShowOutput(prev => !prev)

    } catch (error) {
        setAlertColor("red")
        setAlertMsg(" Server Error 500 ! ")
        setOpenAlert(true)
    } 
  }

  useEffect(()=>{
    ;(async()=>{
      if (showOutput){
        try{
          const response = await axios.get("/file/upload")
          setOutput(
            <audio controls>
                <source src={`${response.data}`} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio> 
            
            )
        }
        catch(error){ 
          setOutput("Error Generating Ouput!")
        }
      }            
    })()
    
    setShowOutput(true)
}, [showOutput])
// ================= END OF OUTPUT ==========

  



  return (
    <>
    {/* {showAlert} */}
    <Alert
    color={alertColor}
    open={openAlert}
    onClose={() => setOpenAlert(false)}
    animate={{
      mount: { y: 0 },
      unmount: { y: 100 },
    }
    }
    className='rounded px-10'
  >
    {alertMsg}
  </Alert>
  {/* End of Alert */}



    <div className="box-border my-20 px-28 space-y-10">
      
      {/* === HEADING & Highlight ===  */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Transform your Voice in 3 Simple Steps</h1>
        <div className="w-full flex justify-center">
         <p className="text-gray-600 w-[45%]">DeepCloning Transforms your voice in Realistic artist vocals, Esay to use. Your voice not more geneatically predetermine.</p>
        </div>
      </div>
      {/* =========== END of Heading =========== */}


      {/* ========== INPUT AND Recording Files ========== */}
      <div className="flex justify-center">
          <div className="w-[600px] h-auto  bg-gray-50 rounded shadow-lg shadow-indigo-100 text-center px-10 py-8">

            {/* === Heading === */}
            <h1 className="text-xl font-bold">Voice Cloning Model</h1> 
            <p className="text-sm text-gray-500 dark:text-gray-300" >Input audio should not be more than 30 sec.</p>
            {/* ===End Heading=== */}

            {/* =========== FILE INPUT ========== */}
            <div className="flex justify-between mt-10">
              
              <div>
              <div className="mt-1 flex items-center">
                <label className="relative cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                <span>Choose File</span>
                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" 
                onChange={useFileChange}/>
                </label>
                <span className='mx-2 px-1 border-2 rounded text-indigo-600'>{filename}</span>
              </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 text-start" id="file_input_help">Upload .mp3 or .wav file.</p>
              </div>

              <div>
                <button className='px-5 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white'
                onClick={handleFile}>Submit file</button>
              </div>
            </div>
            {/* ================== END FileInput ==================== */}

            
            
            <div className='text-center flex flex-col items-center pt-6 pb-2'>
                <div className='w-[50%] bg-gray-400 pt-[2px] rounded'></div>
                <p className='w-16 relative bottom-3 bg-gray-50 px-1 rounded-fill text-gray-600'>OR</p>
            </div>


            {/* ============= RECORDING =============== */}
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

              {/* {audioURL && (
              <div className="mb-4">
                <audio controls src={audioURL}></audio>
              </div>
              )} */}
              <div className='flex justify-center'>
                
                <button onClick={resetRecording} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Reset Input</button>
              </div>
            </div>

            </div>
            {/* === End of Recording === */}


            {/* ======== OPTIONS ====== */}
            <div className='w-full bg-gray-800 pt-[2px] rounded my-8'></div>
            
            <div className='w-full h-auto grid place-content-center pt-10 space-y-4'>

              <div className="w-72">
                  <p>Select Target Person Voice: </p>
                  <Select label="Select Voice" placeholder={""}
                  value={option}
                  onChange={(val)=> setOption(val)} success>

                    <Option value='Trump'>Trump</Option>
                    <Option value='Biden'>Biden</Option>
                    <Option value='Wajahat'>Wajahat</Option>

                  </Select>         
              </div>

              <div className="w-72">
                <p>Language:  </p>
                <Select label="Select Language" placeholder={""} disabled>
                  <Option>Trump</Option>
                  <Option>Biden</Option>
                </Select>
              </div>

            </div>
            {/* ========= END OF OPTIONS ========= */}
            
            {/* ======= Generate Output Button ======== */}
            <div className='my-12'>
              <button className='px-8 py-2 bg-indigo-800 hover:bg-indigo-900 text-white font-bold rounded'
              onClick={generateOutput}>Generate Audio</button>
            </div>
            {/* ========= End of BTN =========== */}


            {/* ======== INPUT ======== */}
                <div className='my-6 text-start'>
                  <h1 className='text-2xl font-bold '>Input:</h1>
                  <div className='flex justify-center text-gray-600'>
                    {inputFile}</div>
                </div>
            {/* ====== END Input ======== */}


            {/* ======== OUTPUT ======== */}
            <div className='my-6 text-start'>
                  <h1 className='text-2xl font-bold '>Output:</h1>
                  <div className='flex justify-center text-gray-600'>
                    {Output}
                  </div>
                </div>
            {/* ====== END Output ======== */}




          </div>
      </div>
      
    </div>
    </>
  )
}

export default VoiceCloning
