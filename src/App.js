import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Market from './components/Market'
import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path='/market'>
            <Market />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
