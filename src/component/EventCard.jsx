import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { HiTicket } from 'react-icons/hi'
import { Link } from 'react-router-dom'


const EventCard = ({_id,image,title,host,category,location,date,tickets}) => {
  return (
    <Link
      to={`/events/${_id}`}
      className="text-decoration-none text-dark mx-auto mx-lg-0 my-4 col-12 eventcard"
    >
      <div className="mx-auto col-12">
        <img src={image} alt={title} className="w-100 rounded-2 loading-lazy" />
        <div className="mt-2 pb-2">
          <h3> {title}</h3>
          <p className="mb-0">
            <span className="fw-medium fs-5 mt-3"> Host:</span>
            {host}
          </p>
          <p className="mb-0">
            <span className="fw-medium fs-5 mt-3"> Category:</span>
            {category}
          </p>
          <p className="mb-0 fw-medium">
            <FaLocationDot /> {category}
          </p>
          <p className="mb-0 fw-medium">
            <FaCalendarAlt /> {date}
          </p>
          <p className="mb-0 fw-medium">
            <HiTicket/> {category}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default EventCard