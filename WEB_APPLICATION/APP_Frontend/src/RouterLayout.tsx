// import React from 'react'
import {Outlet} from "react-router-dom"
import {Navbar, Footer} from "./components"

function RouterLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RouterLayout
