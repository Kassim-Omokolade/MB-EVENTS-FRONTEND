import React from 'react'

const ActionBtn = ({content,width,type, className=""}) => {
  return (
    <button className={`text-white rounded-2 p-2 fw-medium main-bg-color ${className}`} style={{height:"50px",width}} type={type ?type:"button"}>{content}</button>
  )
}

export default ActionBtn