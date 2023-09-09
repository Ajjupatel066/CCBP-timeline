// Write your code here
import {Chrono} from 'react-chrono'
import './index.css'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const rendertimeline = eachItem => {
    if (eachItem.categoryId === 'PROJECT') {
      return (
        <ProjectTimelineCard
          key={eachItem.duration}
          projectDetails={eachItem}
        />
      )
    }
    return (
      <CourseTimelineCard key={eachItem.duration} courseDetails={eachItem} />
    )
  }

  return (
    <div className="bg-container">
      <div className="app-container">
        <div className="heading-container">
          <h1 className="heading-label">
            MY JOURNEY OF <br />
            <span className="heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => rendertimeline(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
