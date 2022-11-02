import React from "react"

import "./DefaultPageContainer.css"

const DefaultPageContainer = ({ children }) => {
  return (
    <main className="mx-auto min-w-[70%] max-w-5xl py-12 px-6">{children}</main>
  )
}

export default DefaultPageContainer
