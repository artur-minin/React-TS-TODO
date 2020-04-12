import React from 'react'

const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className='nav-wrapper blue accent-4 px1'>
      <a href='/' className='brand-logo'>
        React + Typescript TODO
      </a>
      <ul className='right hide-on-med-and-down'>
        <li>
          <a href='/'>Список дел</a>
        </li>
        <li>
          <a href='/'>Информация</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
