import React from 'react'
import {Link} from 'react-router-dom'

class UserGrid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'profiles': []
    }
  }
  componentDidMount () {
    var myHeaders = new Headers()
    var myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    }
    fetch('http://localhost:3001/account', myInit).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log('ok')
          console.log(data)
          this.setState({
            'profiles': data
          })
        })
      } else {
        this.setState({'notFound': true})
      }
    })
  }
  render () {
    return (
      <div>
        <div className='homegrid-wrapper'>
          {
            this.state.profiles.map((profile) => {
              return (
                <div>
                  <Link to={'/profile/' + profile.accountName}>
                    <img className='profile-picture' src={profile.profilePicture} />
                    <p>@{profile.accountName}</p>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default UserGrid
