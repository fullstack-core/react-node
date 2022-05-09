import React from 'react'
import logo from '../logo.svg'
import '../styles/_header.css'

const Header = () => {
  return (
    <header className="App-header">
        <img src={logo} alt="logo_img" />
        <h1>To do list by React + Node</h1>
  </header>
  )
}

export default Header