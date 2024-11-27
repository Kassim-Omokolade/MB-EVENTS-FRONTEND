import React from 'react'
import { Link } from 'react-router-dom'

const SectionHeading = ({content}) => {
  return (
    <div className='d-flex justify-content-between align-items-center my-2'>
        <h2 className='fs-5'> {content}</h2>
        <Link to="/events" className="text-dark fs-5 text-decoration-none"> See all</Link>
    </div>
  )
}

export default SectionHeading