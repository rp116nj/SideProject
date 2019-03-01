import React from 'react'
import Navbar from './NavBar'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import AllCategories from './AllCategories';

const Root = () => {
  return (
    <div>
      <nav>
        Welcome!
        <Navbar />
      </nav>
      <main>
        <h1> This is my Library </h1>
        <p> Lets start with some Routes </p>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/categories" component={AllCategories} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default Root
