// import React from 'react'
import AccountAccessSideImg from "../../assets/AccountAccessSideImg.png"
import { Button } from "@material-tailwind/react"

function AccountAcess() {
  return (
    <div className="w-full h-[700px] flex px-20 ">
      {/* Left Hand Side */}
      <div id="Left-Side" className="w-[50%] h-full grid place-content-center">
        <img src={AccountAccessSideImg} alt="ProcessImg" className="w-[350px] h-[500px]" />
      </div>

      {/* Right HAND SIDE */}
      <div className="w-[50%] h-full grid place-content-center">
            <div className="h-[500px] max-w-[70%] bg-gray-50 rounded-lg shadow-md px-10 grid place-content-center">
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
  )
}

export default AccountAcess
