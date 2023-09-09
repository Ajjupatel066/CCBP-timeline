// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-card">
      <div className="heading-section">
        <h1 className="course-card-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachTag => (
          <li className="tag-item" key={eachTag.id}>
            <p className="tag-name">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
