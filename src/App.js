import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import HomePage from './components/pages/Home'
import CreateProjectPage from './components/pages/CreateProject'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <div style={{ marginTop: '40px' }}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/new' component={CreateProjectPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
