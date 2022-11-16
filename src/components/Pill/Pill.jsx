import React from "react"

import "./Pill.css"

const Pill = ({ children, ...restProps }) => {
  return (
    <span className="pill px-3" {...restProps}>
      {children}
    </span>
  )
}

export default Pill
