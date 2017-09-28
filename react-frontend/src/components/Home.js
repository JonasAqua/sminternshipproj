import React from 'react'
import SendPost from './SendPost'
import UserGrid from './UserGrid'

function Home (props) {
  return (
    <div>
      <div className='center-wrapper'>
        <SendPost />
      </div>
      <UserGrid />
    </div>
  )
}

export default Home
