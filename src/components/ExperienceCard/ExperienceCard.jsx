import React from "react"

const ExperienceCard = ({ company, jobTitle, timeWorked, children }) => {
  return (
    <div className="mb-8">
      <h1 className="mb-2 text-2xl font-bold">{company}</h1>
      <div className="mb-2 flex w-full flex-col text-xl md:mb-1 md:flex-row md:text-2xl">
        <small className="flex-1">{jobTitle}</small>
        <small>{timeWorked}</small>
      </div>
      {children}
    </div>
  )
}

export default ExperienceCard
