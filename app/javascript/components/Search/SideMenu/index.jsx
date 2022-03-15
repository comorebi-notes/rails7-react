import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  const categories = [
    { uri: 'instruments', name: '楽器' },
    { uri: 'genres', name: 'ジャンル' }]
  return (
    <div className="card">
      <div className="list-group list-group-flush">
        {categories.map(({ uri, name }) => (
          <NavLink
            to={`/search/${uri}`}
            key={uri}
            className={({ isActive }) => `list-group-item ${isActive ? 'active' : ''}`}
          >
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
