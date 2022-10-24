import * as React from "react"
import Navigation from "./Navigation/Navigation"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation>
        <main>{children}</main>
      </Navigation>
    </div>
  )
}

export default Layout
