import React from "react"
import Header from "./Header"

import "normalize.css"
import "../styles/global.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
