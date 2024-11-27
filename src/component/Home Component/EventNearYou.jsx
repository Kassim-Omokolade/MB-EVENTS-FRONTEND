import React from 'react'
import SectionHeading from '../SectionHeading'
import { events } from '../../data';
import EventCard from '../EventCard';


const EventNearYou = () => {
  return (
    <div className='my-5 container' >
       <SectionHeading content="Event Near You"/>
       <div className='d-flex justify-content-between align-items-center gap-4 event-container my-3' style={{overflow:"scroll"}}>
       {
        events.map((event)=>{
            return <EventCard key={event._id} {...event}/>
        })
       }
       </div>
        </div>
  )
}

export default EventNearYou