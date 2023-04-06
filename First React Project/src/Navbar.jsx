import React from 'react'
import Logo from './assets/react.svg'

function Navbar () {
  const toggleMenu = () => {
    const menu = document.querySelector('.overlay')
    const menuButton = document.querySelector('.menu')
    const isOpen = menu.style.transform === 'translateX(0%)'
    menu.style.transform = isOpen ? 'translateX(100%)' : 'translateX(0%)'
    menuButton.textContent = isOpen ? '☰' : 'X'
  }

  return (
    <nav className='navbar'>
      <a href='index.html'>
        <img src={Logo} className='Logo' />
				ReactFacts
			</a>
      <ul className='overlay'>
        <li>
          <a href='index.html'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#update'>Updates</a>
        </li>
        <li>
          <a href='#blog'>Blog</a>
        </li>
      </ul>
      <a href='#' className='menu' onClick={toggleMenu}>
				☰
			</a>
    </nav>
  )
}

export default Navbar
