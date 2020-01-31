import React from 'react'
import { ProjectType } from './../../consts'

const MetaForm = props => {
  const { onChange, project } = props
  const { projectType } = project

  return (
    <div className='row'>
      <form className='col s12'>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              placeholder='com.website.myapp'
              type='text'
              name='id'
              onChange={onChange}
            />
            <label htmlFor='id'>ID</label>
          </div>
          <div className='input-field col s6'>
            <input
              placeholder='My App'
              name='name'
              type='text'
              onChange={onChange}
            />
            <label htmlFor='name'>Name</label>
          </div>
        </div>

        <div className='row'>
          <div className='col s6'>
            <label htmlFor='metadataLicense'>Metadata License</label>
            <select
              className='browser-default'
              name='metadataLicense'
              onChange={onChange}
            >
              <option value='FSFAP'>FSFAP</option>
              <option value='CC0-1.0'>CC0-1.0</option>
              <option value='CC-BY-3.0'>CC-BY-3.0</option>
              <option value='CC-BY-SA-3.0'>CC-BY-SA-3.0</option>
              <option value='GFDL-1.3'>GFDL-1.3</option>
              <option value='MIT'>MIT</option>
            </select>
          </div>
          <div className='col s6'>
            <label htmlFor='projectLicense'>Project License</label>
            <select
              className='browser-default'
              name='projectLicense'
              onChange={onChange}
            >
              <option value='GPL-2.0'>GPL-2.0</option>
              <option value='LGPL-3.0+'>LGPL-3.0+</option>
              <option value='GPL-3.0+'>GPL-3.0+</option>
              <option value='MIT'>MIT</option>
              <option value='CC-BY-SA-2.0 '>CC-BY-SA-2.0 </option>
            </select>
          </div>
        </div>

        {projectType === ProjectType.WebApp && (
          <div className='row'>
            <div className='input-field col s12'>
              <input
                placeholder='https://riot.com/app'
                type='text'
                name='launchableURL'
                onChange={onChange}
              />
              <label htmlFor='launchableURL'>Web Application URL</label>
            </div>
          </div>
        )}

        <div className='row'>
          <div className='input-field col s12'>
            <textarea
              name='summary'
              className='materialize-textarea'
              onChange={onChange}
            />
            <label htmlFor='summary'>Summary</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field col s12'>
            <textarea
              name='description'
              className='materialize-textarea'
              onChange={onChange}
            />
            <label htmlFor='description'>Description</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field col s6'>
            <input
              placeholder='The name of the developer(s)'
              type='text'
              name='developerName'
              onChange={onChange}
            />
            <label htmlFor='developerName'>Developer Name</label>
          </div>
          <div className='input-field col s6'>
            <input
              placeholder='update@email.me'
              name='updateContact'
              type='email'
              onChange={onChange}
            />
            <label htmlFor='updateContact'>Update Contact</label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MetaForm
