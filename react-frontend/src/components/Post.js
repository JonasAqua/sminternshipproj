import React from 'react'

function Post (props) {
  let postDate = new Date(props.postDate)
  console.log(postDate)
  const day = postDate.getDate()
  const month = postDate.getMonth() + 1
  const year = postDate.getFullYear()

  const hours = postDate.getHours()
  let minutes = postDate.getMinutes()
  if (minutes >= 0 && minutes <= 9) {
    minutes = '0' + minutes
  }
  return (
    <div className='post'>
      <div className='post-content'>
        {props.postContent}
      </div>
      <span className='post-category'>
        {props.postCategory}
      </span>
      <span className='post-date'>
        {day + '.' + month + '.' + year + ' - ' + hours + ':' + minutes}
      </span>
    </div>
  )
}

export default Post
