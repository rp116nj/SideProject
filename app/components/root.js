import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllCategories from './AllCategories';
import Navbar from './NavBar';
import AllBooks from './AllBooks'
import SingleCategory from './SingleCategory';
import SingleBook from './SingleBook'
import AddCategory from './AddCategory';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          Welcome!
          <Navbar />
        </nav>
        <main>
          <h1> This is my Library </h1>
          <p> Lets start with some Routes </p>
          <div className="main-container">
            <Switch>
              <Route exact path="/" />
              <Route exact path="/categories" component={AllCategories} />
              <Route exact path="/books" component={AllBooks} />
              <Route exact path="/categories/addCategory" component={AddCategory} />
              <Route exact path="/categories/:id" component={SingleCategory} />
              <Route exact path="/books/:id" component={SingleBook} />
            </Switch>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Root
