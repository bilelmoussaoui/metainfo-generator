import React, { useState } from 'react'
import { ProjectType } from './../../consts'
import CreateDesktopApp from './../projects/DesktopApp'
import MetaInfoTextArea from './../projects/MetaInfo'

const CreateProject = props => {
  const projectType = props.match.params.project_type
  
  const [project, setProject] = useState({
    id: '',
    name: '',
    summary: '',
    description: '',
    developerName: '',
    updateContact: '',
    projectType,
  })

  const onChange = e => {
    const name = e.target.name
    const val = e.target.value
    setProject({
      ...project,
      [name]: val
    })
  }
  return (
      <div className='row'>
        <div className='col s6'>
          <CreateDesktopApp
            {...props}
            project={project}
            onChange={onChange}
          />
        </div>
        <div className='col s6'>
          <MetaInfoTextArea project={project} />
        </div>
      </div>
  )
}

export default CreateProject
