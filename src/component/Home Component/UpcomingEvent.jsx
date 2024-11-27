import React from 'react'
import SectionHeading from '../SectionHeading'
import { events } from '../../data'
import EventCard from '../EventCard'

const UpcomingEvent = () => {
  return (
    <div className='my-5 container'>
        <SectionHeading content="Upcoming Event"/>
        <div className='d-flex justify-content-between align-items-center gap-4 my-3 event-container ' style={{overflowX:"scroll"}}>
            {
                events.slice(4).map((event)=>{
                    return <EventCard key={event._id} {...event}/>
                }
                )
            }

        </div>
    </div>
  )
}

export default UpcomingEvent