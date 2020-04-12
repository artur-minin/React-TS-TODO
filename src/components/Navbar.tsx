import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className='nav-wrapper blue accent-4 px1'>
      <Link to='/' className='brand-logo'>
        React + Typescript TODO
      </Link>
      <ul className='right hide-on-med-and-down'>
        <li>
          <NavLink to='/' activeClassName='blue darken-2' exact>
            Список дел
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName='blue darken-2'>
            Информация
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
