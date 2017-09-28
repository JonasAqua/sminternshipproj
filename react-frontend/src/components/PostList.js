import React from 'react'
import Post from './Post'

function PostList (props) {
  if (props.posts.length === 0) {
    return <h3>{props.profileName} didn't post anything yet!</h3>
  } else {
    return (
      <div>
        {
          props.posts.map((post) => {
            return (
              <Post
                postContent={post.message}
                postCategory={post.category}
                postDate={post.dateCreated}
              />
            )
          })
        }
      </div>
    )
  }
}

export default PostList
