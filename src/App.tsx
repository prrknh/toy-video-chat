import React from 'react'
import { Room } from './components/Room'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import { Home } from './components/Home'

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/room'} component={Room} />
    </Router>
  )
}

export default App
