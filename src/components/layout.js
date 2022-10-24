import * as React from "react"
import Navigation from "./Navigation/Navigation"
import "./layout.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <Navigation toggleSidebarMenu={() => {}}>
        <main>{children}</main>
      </Navigation>
    </div>
  )
}

export default Layout
