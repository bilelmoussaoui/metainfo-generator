import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import HomePage from './components/pages/Home'
import CreateProjectPage from './components/pages/CreateProject'

const App = () => {
  return (
    <HashRouter basename='/'>
      <div className='App'>
        <Navbar />
        <div style={{ marginTop: '40px' }}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/new/:project_type' component={CreateProjectPage} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
