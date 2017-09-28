import React from 'react'

class SendPost extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',
      category: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    if (this.state.message && this.state.message !== '' && this.state.category && this.state.category !== '') {
      this.send(this.state.message, this.state.category)
      this.setState({
        'message': '',
        'category': ''
      })
    }
  }

  send (message, category) {
    var myHeaders = new Headers()
    let payload = {
      'message': message,
      'category': category
    }
    let blob = new Blob([JSON.stringify(payload)], {type: 'application/json'})
    var myInit = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: blob
    }
    fetch('http://localhost:3001/posts', myInit).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log('ok!')
          console.log(data)
        })
      } else {
        console.log('error')
      }
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea name='message' value={this.state.message} onChange={this.handleInputChange} placeholder='What is in your mind?' /> <br />
        <label>Category: </label>
        <input name='category' type='text' value={this.state.category} onChange={this.handleInputChange} />
        <input type='submit' value='Send!' />
      </form>
    )
  }
}

export default SendPost
