// import React from 'react'

function SourceVoices() {
  return (
    <div className="w-full h-[400px] bg-indigo-900 flex items-center rounded-xl shadow-lg shadow-indigo-400">
    <div className="w-full rounded-lg text-center text-white box-border p-10">
      <h1 className="text-3xl font-bold">Voice Available for Cloning</h1>
      <p className="text-gray-400 text-lg">Voice sample of <b>3</b> seconds.</p>

      <div className="w-full h-50 flex flex-wrap justify-around items-center px-0 md:px-8 mt-14">
        <div className="w-72 md:w-96 h-20 bg-gray-50 rounded-3xl shadow-md mb-6 mr-2"></div>
        <div className="w-72 md:w-96 h-20 bg-gray-50 rounded-3xl shadow-md mb-6"></div>
        {/* <div className="w-40 md:w-60 h-20 bg-gray-50 rounded-3xl shadow-md mb-6"></div> */}
      </div>
    </div>
    </div>
  )
}

export default SourceVoices
