import React from "react"
import { withPrefix } from "gatsby"
import { graphql } from "gatsby"

import "./Resume.css"
import DefaultPageContainer from "../components/DefaultPageContainer/DefaultPageContainer"
import ExperienceCard from "../components/ExperienceCard/ExperienceCard"
import Pill from "../components/Pill/Pill"
import Layout from "../components/layout"

import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const getPillList = list => (
  <div style={{ display: "flex", flexFlow: "row wrap" }}>
    {list.map(entry => (
      <Pill key={entry}>{entry}</Pill>
    ))}
  </div>
)

const ProjectListing = ({ title, description, technologies, image }) => {
  return (
    <section className="flex flex-col xl:flex-row gap-8 mb-8">
      <div className="flex-1">
        <h2>{title}</h2>
        {description}
        <p className="font-bolder text-lg">Built with:</p>
        {getPillList(technologies)}
      </div>
      <div className="flex-1 flex justify-center items-center">{image}</div>
    </section>
  )
}

const Resume = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <DefaultPageContainer>
        <h1>Projects</h1>
        <span>
          For code for the following project as well as more projects that I've
          worked on, visit my{" "}
          <a href="https://github.com/dv297">Github profile</a>.
        </span>
        <ProjectListing
          title="Planner"
          image={
            <StaticImage
              src="../images/planner.png"
              alt="Screenshot of Planner application"
            />
          }
          description={
            <p className="leading-6">
              An application to help teams breakdown and coordinate the tasks
              needed to complete a project. A passion project of mine; I've
              always helped my teams think about how they want to break up and
              organize work, creating balance between developers wanting small,
              Agile deliverables and product owners wanting to know when the
              bigger initiatives have been reached.
            </p>
          }
          technologies={[
            "NextJS",
            "TypeScript",
            "React",
            "Prisma",
            "TailwindCSS",
          ]}
        />

        <ProjectListing
          title="Release Manager"
          image={
            <StaticImage
              src="../images/release-manager.png"
              alt="Screenshot of Release Manager application"
            />
          }
          description={
            <p className="leading-6">
              A Node.JS web application that runs locally through a CLI command
              on your machine. Once you ran the CLI command in another Github
              repository on your machine, it would open a web UI that would
              guide you through the steps for creating a release branch based
              off the commits you select for that repository. This was useful
              for our team given our release cycles and our workflow that only
              allowed cards that passed quality assurance checks to get
              promoted.
            </p>
          }
          technologies={[
            "Node.JS",
            "Git CLI",
            "React",
            "TypeScript",
            "Express",
          ]}
        />

        <ProjectListing
          title="Dev Dashboard"
          image={
            <StaticImage
              src="../images/dev-dashboard.png"
              alt="Screenshot of Dev Dashboard application"
            />
          }
          description={
            <p className="leading-6">
              An application that hit the Crucible REST API to collect code
              reviews that belonged to my team and allowed us to track the
              status of each reviewer. This allowed us to improve async
              communication between the team, prevent stagnant reviews, and
              provide more granular statuses not normally found in Crucible.
            </p>
          }
          technologies={[
            "Crucible REST",
            "MongoDB",
            "React",
            "Express",
            "Socket.IO",
          ]}
        />
      </DefaultPageContainer>
    </Layout>
  )
}

export default Resume

export const Head = () => <Seo title="Projects" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
