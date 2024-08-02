import React from 'react'
import '../css/header.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='nav'>
      <h3 id='logo' className='pencil-circle '>swing</h3>
      <ul className='nav-links'>

        <li className='pencil-circle '>
          <NavLink  className={({ isActive }) => (isActive ? 'active' : 'not-active')}>contact</NavLink>
        </li>
        <li className='pencil-circle '>
          <NavLink  className={({ isActive }) => (isActive ? 'active' : 'not-active')}>help</NavLink>
        </li>

      </ul>
     
    </div>
  )
}

export default Header
