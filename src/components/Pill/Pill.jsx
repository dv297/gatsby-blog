import React from "react"

import "./Pill.css"

const Pill = ({ children, ...restProps }) => {
  return (
    <span
      className="pill bg-gradient-to-b from-blue-700 to-blue-900 px-3"
      {...restProps}
    >
      {children}
    </span>
  )
}

export default Pill
