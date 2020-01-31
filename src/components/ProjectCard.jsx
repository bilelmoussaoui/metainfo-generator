import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = props => {
  const { name, type, description } = props
  return (
    <div className='col s12 m4 l3'>
      <div className='card small indigo'>
        <div className='card-content white-text'>
          <Link className='white-text' to={`/new/${type}`}>
            <h3 className='card-title'>{name}</h3>
          </Link>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
