import RouterLayout from "./RouterLayout"

import './App.css'
// import { Footer, Navbar } from "./components"
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import { AboutUs, ContactUs, Home, TextSpeech, VoiceCloning } from "./components"

function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RouterLayout />}>
      <Route path="" element={<Home />} />
      <Route path="textSpeech" element={<TextSpeech />} />
      <Route path="voiceCloning" element={<VoiceCloning />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="contactUs" element={<ContactUs />} />
    </Route>
  ))

  return (
    <div className="h-full w-full grid place-content-center bg-gray-200">
      <div className="h-full w-full  bg-green-600">
        <RouterProvider router={route} />
      </div>
    </div>
  )
}

export default App
