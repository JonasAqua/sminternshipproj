import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'

function NotFound (props) {
  return <h1>User was not found!</h1>
}

function Notifications (props) {
  return (
    <div className='center-wrapper'>
      <h3>You have got no new Notifications!</h3>
    </div>
  )
}

function App (props) {
  return (
    <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/notifications' component={Notifications} />
      <Route path='/profile/:accountName' component={Profile} />
      <Route path='/not-found' component={NotFound} />
    </div>
  )
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))
