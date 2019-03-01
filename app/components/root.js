import React from 'react'
import Navbar from './NavBar'

const Root = () => {
  console.log('made it to root component')
  return (
    <div>
      <nav>
        Welcome!
        {/* <Navbar /> */}
      </nav>
      <main>
        <h1> This is my Library </h1>
        <p> Lets start with some Routes </p>
      </main>
    </div>
  )
}

export default Root
