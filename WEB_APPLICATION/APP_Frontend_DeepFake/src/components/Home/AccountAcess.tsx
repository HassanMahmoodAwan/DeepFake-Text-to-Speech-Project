// import React from 'react'
import AccountAccessSideImg from "../../assets/AccountAccessSideImg.png"
import { Button } from "@material-tailwind/react"

function AccountAcess() {
  return (
    <div className="w-full h-[700px] grid bg-yellow-200 place-content-center">
      <div className="w-full h-full flex">
      {/* Left Hand Side */}
      <div id="Left-Side" className="hidden lg:block w-[50%] h-full ">
        <img src={AccountAccessSideImg} alt="ProcessImg" className="w-[350px] h-[500px]" />
      </div>

      {/* Right HAND SIDE */}
      <div className="w-full lg:w-[50%] h-full flex justify-center lg:justify-end">
            <div className="h-[500px] w-[80%] bg-gray-50 rounded-lg shadow-md px-10 grid place-content-center">
               <h1 className="text-3xl font-bold text-center">Create a Account to Access</h1>
               <div className="mt-16 space-y-4 text-lg text-gray-800">
                    <p>Generate Audio in Seconds.</p>
                    <p>Use Editor for narrating any Script.</p>
                    <p>Developed for Content Creator, Presentations. for Educational Purposes.</p>
               </div>
               <Button variant="filled" className="bg-purple-800 mt-10" placeholder ="" >
                <span className="text-xl">SignUp</span><span className="text-gray-400 pl-2">Its Free</span>
               </Button>
            </div>
      </div>
    </div>
    </div>
  )
}

export default AccountAcess
