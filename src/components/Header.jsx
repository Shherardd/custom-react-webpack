import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.scss'

const Header = () => {
    return (
      <header>
        <Link to='/' className="header-title">
          Merch Store
          <div className='active' />
        </Link>
        <Link to='/checkout' className="header-checkout">
          Checkout
          <div className='active' />
        </Link>
      </header>
    )
}

export default Header
