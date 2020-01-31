import React, { useState } from 'react'
import MetaForm from './../projects/Form'
import MetaCode from './../projects/Code'

const CreateProject = props => {
  const projectType = props.match.params.project_type

  const [project, setProject] = useState({
    id: '',
    name: '',
    summary: '',
    description: '',
    developerName: '',
    updateContact: '',
    launchableURL: '',
    metadataLicense: '',
    projectLicense: '',
    projectType
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
      <div className='col s12 m12 l6'>
        <MetaForm {...props} project={project} onChange={onChange} />
      </div>
      <div className='col s12 m12 l6'>
        <MetaCode project={project} />
      </div>
    </div>
  )
}

export default CreateProject
