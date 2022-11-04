import React, { useState } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import FsLightbox from "fslightbox-react"

import DefaultPageContainer from "../components/DefaultPageContainer/DefaultPageContainer"
import Pill from "../components/Pill/Pill"
import Layout from "../components/layout"
import Seo from "../components/seo"

const getPillList = list => (
  <div className="flex flex-wrap">
    {list.map(entry => (
      <Pill key={entry}>{entry}</Pill>
    ))}
  </div>
)

const ProjectListing = ({
  title,
  description,
  technologies,
  image,
  additionalImages,
}) => {
  const [toggler, setToggler] = useState(false)

  return (
    <section className="mb-12">
      <div className="flex flex-col gap-8 xl:flex-row">
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-semibold">{title}</h2>
          <div className="mb-4">{description}</div>
          <p className="mb-4 text-lg font-bold">Built with:</p>
          {getPillList(technologies)}
        </div>
        <button
          className="pointer-cursor flex flex-1 items-center justify-center focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={() => setToggler(!toggler)}
        >
          {image}
        </button>
        <FsLightbox
          toggler={toggler}
          sources={[
            <div>{image}</div>,
            ...(additionalImages
              ? additionalImages.map(image => <div>{image}</div>)
              : []),
          ]}
        />
      </div>
      {additionalImages ? (
        <div className="hide-scroll-bar mt-8 flex overflow-x-scroll pb-4">
          <div className="flex flex-nowrap gap-8">
            {additionalImages.map(image => (
              <button className="w-80" onClick={() => setToggler(!toggler)}>
                {image}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}

const Resume = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <DefaultPageContainer>
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold">Projects</h1>
          <p>
            For code for the following project as well as more projects that
            I've worked on, visit my{" "}
            <a
              href="https://github.com/dv297"
              className="text-blue-600 underline"
            >
              Github profile
            </a>
            .
          </p>
        </div>
        <ProjectListing
          title="Planner"
          image={
            <StaticImage
              src="../images/planner.png"
              alt="Screenshot of Planner application"
            />
          }
          additionalImages={[
            <StaticImage
              src="../images/planner-2.png"
              alt="Screenshot of Planner application"
            />,
            <StaticImage
              src="../images/planner-3.png"
              alt="Screenshot of Planner application"
            />,
          ]}
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
