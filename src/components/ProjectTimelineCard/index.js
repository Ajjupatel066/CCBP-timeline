// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="heading-section">
        <h1 className="project-card-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a
        href={projectUrl}
        rel="noreferrer"
        target="_blank"
        className="link-text"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
