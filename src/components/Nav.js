import React from 'react'

export default function Nav({ handleClick, selected }) {
 
  return (
    <div>
      <a href="/" onClick={e=> { e.preventDefault(); handleClick('episodes')}} style={{ textDecoration: selected === 'episodes' ? 'underline' : 'none' }}>Episodes</a> |
      <a href="/" onClick={e=> { e.preventDefault(); handleClick('posts')}} style={{ textDecoration: selected === 'posts' ? 'underline' : 'none' }}>Posts</a> |
      <a href="/" onClick={e=> { e.preventDefault(); handleClick('users')}} style={{ textDecoration: selected === 'users' ? 'underline' : 'none' }}>Users</a>
    </div>
  )
}
