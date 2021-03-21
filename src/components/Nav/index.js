import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import './Nav.css'
import icon from '../../assets/eth-icon.png'

export default function Nav() {
  return (
    <div className="nav">
      <img className="nav__logo" src={icon} alt="Logo" />
      <div className="nav__right">
        <Link as={ReactLink} to="/" className="nav__link">
          Home
        </Link>
        <Link as={ReactLink} to="/market" className="nav__link">
          Market
        </Link>
        <button className="nav__btn">Connect Wallet</button>
      </div>
    </div>
  )
}
