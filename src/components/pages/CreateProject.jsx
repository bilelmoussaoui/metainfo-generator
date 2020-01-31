import React, { useState } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { ProjectType } from './../../consts'
import CreateDesktopApp from './../projects/DesktopApp'
import MetaInfoTextArea from './../projects/MetaInfo'

const CreateProject = props => {
  const [project, setProject] = useState({
    id: '',
    name: '',
    summary: '',
    description: '',
    developerName: '',
    updateContact: '',
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
    <HashRouter>
      <div className='row'>
        <div className='col s6'>
          <Switch>
            <Route
              path={`/new/${ProjectType.DesktopApp}`}
              render={props => (
                <CreateDesktopApp
                  {...props}
                  project={project}
                  onChange={onChange}
                />
              )}
            />
          </Switch>
        </div>
        <div className='col s6'>
          <MetaInfoTextArea type={ProjectType.DesktopApp} project={project} />
        </div>
      </div>
    </HashRouter>
  )
}

export default CreateProject
