import React from 'react'
import {Link} from 'react-router-dom'

export  const Navbar = () => {
   return (
      <nav id="nav">
       <Link to="/categories"> Categories </Link>
      <Link to="/books"> Books </Link>
      </nav>
    )
  }
