import * as React from "react"
import Navigation from "./Navigation/Navigation"

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
