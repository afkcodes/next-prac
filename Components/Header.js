import React from 'react'
import headerStyles from '../styles/Header.module.css'

function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Webdev</span> Newz
      </h1>
    </div>
  )
}

export default Header
