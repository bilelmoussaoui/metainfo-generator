import React from 'react'

const DesktopApp = props => {
  const { onChange } = props
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
            <label for='name'>Name</label>
          </div>
        </div>
        <div class='row'>
          <div class='input-field col s12'>
            <textarea
              name='summary'
              class='materialize-textarea'
              onChange={onChange}
            />
            <label htmlFor='summary'>Summary</label>
          </div>
        </div>

        <div class='row'>
          <div class='input-field col s12'>
            <textarea
              name='description'
              class='materialize-textarea'
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
            <label for='updateContact'>Update Contact</label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DesktopApp
