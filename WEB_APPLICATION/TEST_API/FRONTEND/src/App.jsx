import { useState } from 'react'
import {Select, Option} from "@material-tailwind/react"
import './App.css'


function App() {

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='h-auto w-[500px] px-12 py-10 text-center rounded bg-gray-900 space-y-5'>
        <div className='flex justify-between items-center'>
            <h4 className='text-xl font-bold'>Upload File</h4>
            <button className='px-5 py-1.5 bg-purple-900 rounded'>Upload Audio File</button>
        </div>

        <div className='flex justify-between items-center'>
            <h4 className='text-xl font-bold'>Upload File</h4>
            <button className='px-5 py-1.5 bg-red-700 rounded'>Start Recording Audio</button>
        </div>


        <div className='w-full h-auto grid place-content-center pt-10 space-y-4'>
        <div className="w-72">
          <p>Select Target Person Voice: </p>
          <Select label="Select Voice" success>
            <Option>Trump</Option>
            <Option>Biden</Option>
            <Option>Material Tailwind Vue</Option>   
          </Select>
        </div>

        <div className="w-72">
          <p>Language:  </p>
          <Select label="Select Language" disabled>
            <Option>Trump</Option>
            <Option>Biden</Option>
            <Option>Material Tailwind Vue</Option>
          </Select>
        </div>
        </div>

        <div className='pt-10'>
          <h1 className='text-2xl font-bold text-start'>OUTPUT: </h1>
        </div>
        


      </div>
    </div>
  )
}

export default App
