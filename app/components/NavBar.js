import React from 'react'
import {Link} from 'react-router-dom'
 

const Navbar = () => {
   return (
    <nav id="navbar">
       <Link to="/categories"> Categories </Link>
       <Link to="/books"> Books </Link>
       <Link to="/categories/addCategory" >AddCategory</Link>
    </nav>
    )
  }

export default Navbar
