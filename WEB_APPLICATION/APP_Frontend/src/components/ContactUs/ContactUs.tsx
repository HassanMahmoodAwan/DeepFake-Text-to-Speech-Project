// import React from 'react'
import { Input, Textarea, Button } from "@material-tailwind/react";

function ContactUs() {
  return (
    <div className="w-full h-full my-20 box-border px-4 md:px-10 lg:px-28 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="w-full space-y-8">
        <div className="">
          <h1 className="mb-1">Query</h1>
          <Input label="Username" type="text" crossOrigin={''} />
        </div>
        <div className="">
          <h1 className="mb-1">Message</h1>
          <Textarea rows={10} label="Message" />
        </div>

        <div className="w-full flex justify-center">
          <Button variant="filled" placeholder={''} className="w-80 bg-purple-700">Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
