import WorkItem from "./WorkItem"
import workImage1 from "../res/portfolio-work-1.png"

const WorkContainer = () => {
  return (
    <div>
      <WorkItem
        href="https://www.crouchjump.com"
        image={workImage1}
        title="CrouchJump"
        content={`
          I was brought on to work on the development
          of the legacy version of CrouchJump, but was
          then went on to lead the development and
          design of a new version of the site.\n
          The site is packed with features and fitting
          them all into the various pages in a clean,
          user friendly way is challenging.\n
          Today, I am still working on the new version
          of the site with a truly talented team.
        `}
      />
    </div>
  )
}

export default WorkContainer
