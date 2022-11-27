import React from 'react'

const TaskItems = ({data,i}) => {
  return (
    <li key={i}  className="list-group-item" aria-current="true"><strong>Name - </strong>{data.name}   <strong>Finish Date -</strong> {data.date}</li>

  )
}

export default TaskItems