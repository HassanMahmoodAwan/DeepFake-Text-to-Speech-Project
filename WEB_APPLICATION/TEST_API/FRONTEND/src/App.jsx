import { useState, useEffect } from 'react'
import {Select, Option, Alert, Button} from "@material-tailwind/react"
import axios from "axios"
import Replicate from 'replicate'
import './App.css'


function App() {

  const [inputFile, setInputFile] = useState(null)
  const [uploadFile, setUploadFile] = useState(null)
  const [output, setOutput] = useState('Upload File')
  const [open, setOpen] = useState(false)
  
  const [showInput, setShowInput] = useState(false)
  const [showOutput, setShowOutput] = useState(false)



  
    useEffect(()=>{
      
        if (showInput && uploadFile){
          console.log(uploadFile.name)
          setInputFile(
            <audio controls>
              <source src={`http://localhost:3000/audio/${uploadFile.name}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio> )
            
        }else {
          setInputFile(<div className='text-xl text-gray-400'>Loading Audio ....</div>)
        }
        
        setShowInput(true)
      }, [showInput])
      
      
  

  
    useEffect(()=>{
        ;(async()=>{
          if (showOutput){
            try{
              const response = await axios.get("/file/upload")

              setOutput(
                // typeof (response.data)
                <audio controls>
                  <source src={`${response.data}`} type="audio/mpeg" />
                   Your browser does not support the audio element.
                </audio> 
                )
            }
            catch(err){ 
              setOutput("err")
            }
          }
          
          
        })()
        
        setShowOutput(true)
    }, [showOutput])
  


  

  

  function handleFileChange(e){
      setUploadFile(e.target.files[0])
  }

  async function handleFile(){
    if (uploadFile){
      console.log(`file Name: ${uploadFile.name}`)

      try {
        const formData = new FormData();
        formData.append('file', uploadFile);

        // Send the file to your server
        await axios.post('/file/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }

          
        });
        
        alert("Uploaded Successful !")
        setOutput("Loading ...")
        setShowInput((prev)=>!prev)
        setShowOutput((prev)=>!prev)

      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file. Please try again.');
      } 

    }
    else {
      // alert("Please Upload a File: ")
      if (!open){
        setOpen(true)
      }
    }
  }


  return (
    <div className='h-screen w-full'>
    

    <Alert
      color='yellow'
      open={open}
      onClose={() => setOpen(false)}
      animate={{
        mount: { y: 0 },
        unmount: { y: 100 },
      }
      }
      className='rounded px-10'
    >
      A dismissible alert with custom animation.
    </Alert>
    


    <div className='w-full h-screen flex justify-center items-center'>
    

      <div className='h-auto w-[500px] px-12 py-10 text-center rounded bg-gray-900 space-y-5'>
      
      {/* ===== File Input ====== */}
        <div className='flex flex-col space-y-4'>
            <h4 className='text-xl font-bold'>Upload File</h4>
            <p className='text-xs text-gray-500'>File should be in .wav or .mp3 format*</p>
            <div className='flex items-center justify-between'>
              <input type='file' onChange={handleFileChange} className='text-sm'/>
              <button className='px-5 py-1.5 bg-purple-900 rounded'
                onClick={handleFile}>Submit File</button>
            </div>
            <h1 className='text-start text-2xl font-bold'>Input: </h1> 
            <div className='grid place-content-center'>{inputFile}</div>
        </div>
        {/* ===================== */}
        <div className='border-[1px] border-gray-400 rounded my-10'></div>
        

        {/* ==== Recording Audio Online ===== */}
        <div className='flex flex-col space-y-4'>
            <p className='text-xs text-gray-500'>Provide Audio upto 30sec using Microphone</p>
            <div className='flex items-center justify-between'>
              <h4 className='text-xl font-bold'>Record Audio</h4>
              <button className='px-5 py-1.5 bg-red-700 rounded'>Start Recording </button>
            </div> 
        </div>
        {/* ======================== */}
        <div className='border-[1px] border-gray-400 rounded my-10'></div>


        <div className='w-full h-auto grid place-content-center pt-10 space-y-4'>
        <div className="w-72">
          <p>Select Target Person Voice: </p>
          <Select label="Select Voice" success>
            <Option>Trump</Option>
            <Option>Biden</Option>
          </Select>
              
        </div>

        <div className="w-72">
          <p>Language:  </p>
          <Select label="Select Language" disabled>
            <Option>Trump</Option>
            <Option>Biden</Option>
          </Select>
        </div>
        </div>

        <div className='pt-10 w-full flex justify-center'>
          <h1 className='text-2xl font-bold text-start'>OUTPUT: </h1>
          {output} <br></br>
          
        </div>
        


      </div>
    </div>
    </div>
  )
}

export default App
