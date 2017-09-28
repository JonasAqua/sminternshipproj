import React from 'react'
import PostList from './PostList'
import {Redirect} from 'react-router-dom'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'profileName': this.props.match.params.accountName,
      'profilePicture': '',
      'posts': []
    }
    console.dir(this.props)
  }

  componentDidMount () {
    var myHeaders = new Headers()
    var myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    }
    fetch('http://localhost:3001/account/' + this.state.profileName, myInit).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log('ok')
          console.log(data)
          this.setState({
            'profileName': data.accountName,
            'profilePicture': data.profilePicture,
            'posts': data.posts
          })
        })
      } else {
        this.setState({'notFound': true})
      }
    })
  }

  render () {
    if (this.state.notFound) {
      return (
        <Redirect to='/not-found' />
      )
    }
    return (
      <div className='profile-wrapper'>
        <img className='profile-picture' src={this.state.profilePicture} />
        <h1>@{this.state.profileName}</h1>
        <PostList profileName={this.state.profileName} posts={this.state.posts} />
      </div>
    )
  }
}

export default Profile
