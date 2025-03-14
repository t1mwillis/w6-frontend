import React from 'react'
import { Link } from 'react-router-dom'

export default ({ users }) => {
  const list = users.map(user => (
    <li key={user._id}>
      <Link to={`/users/${user._id}/posts`}>
        {user.username}: {user.posts.length} Posts
      </Link>
    </li>
  ))

  return (
    <>
      <h1>All Journals</h1>
      <ul>
        { list }
      </ul>
    </>
  )
}
