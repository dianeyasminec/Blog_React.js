import {Link} from 'react-router-dom'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>The Books Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#ffc40c',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>

  )
}
