## Requirements

The requirements below are broken into separate **tiers**, which model the way we **recommend you approach the project**. That is, we recommend you complete (or complete the majority of) the requirements in Tier 1 before moving on to Tier 2, and so on. Of course, if you get stuck on a particular feature, we recommend moving on and trying another feature - don't sacrifice the good for the perfect!

### Tier 1: All Categories and Books (21/57)

<details>

#### Backend

- [ ] Write a `Categories` model with the following information:
  - [ ] Name - not empty or null
  - [ ] imageUrl - with a default value
  - [ ] Location - not empty or null
  - [ ] Description - extremely large text
- [ ] Write a `Books` model with the following information:
  - [ ] Name - not empty or null
  - [ ] AuthorName - not empty or null
  - [ ] AuthorEmail - not empty or null; must be a valid email
  - [ ] imageUrl - with a default value
  - [ ] Edition - decimal between 0.0 and 4.0
- [ ] Books may be associated with at most one category. Likewise, Categories may be associated with many Books

- [ ] Write a route to serve up all Books
- [ ] Write a route to serve up all Categories

#### Frontend
- [ ] Write a Categories sub-reducer to manage Categories in your Redux store
- [ ] Write a Books sub-reducer to manage Books in your Redux store
- [ ] Write a component to display a list of all Categories (just their names and images)
- [ ] Write a component to display a list of all Books (just their names)
- [ ] Display the all-Categories component when the url matches `/Categories`
- [ ] Display the all-Books component when the url matches `/Books`
- [ ] Add links to the navbar that can be used to navigate to the all-Categories view and the all-Books view

Congrats! You have completed your first vertical slice! Make sure to `commit -m "Feature: Get All Categories and Books"` before moving on (see `RUBRIC.md` - points are awarded/deducted for a proper git workflow)!

</details>

### Tier 2: Single book and Single category (14/57)

<details>

#### Backend

- [ ] Write a route to serve up a single category (based on its id), _including that Categories' Books_
- [ ] Write a route to serve up a single book (based on their id), _including that book's category_

#### Frontend
- [ ] Write a component to display a single category with the following information:
  - [ ] The category's name, image, address and description
  - [ ] A list of the names of all Books in that category (or a helpful message if it doesn't have any Books)
- [ ] Display the appropriate category's info when the url matches `/Categories/:categoryId`
- [ ] Clicking on a category from the all-Categories view should navigate to show that category in the single-category view

- [ ] Write a component to display a single book with the following information:
  - [ ] The book's full name, email, image, and gpa
  - [ ] The name of their category (or a helpful message if they don't have one)
- [ ] Display the appropriate book when the url matches `/Books/:bookId`
- [ ] Clicking on a book from the all-Books view should navigate to show that book in the single-book view

- [ ] Clicking on the name of a book in the single-category view should navigate to show that book in the single-book view
- [ ] Clicking on the name of a category in the single-book view should navigate to show that category in the single-category view

Congrats! You have completed your second vertical slice! Make sure to `commit -m "Feature: Get Single category and book"` before moving on (see `RUBRIC.md` - points are awarded/deducted for a proper git workflow)!


</details>

### Tier 3: Adding a category and Adding a book (12/57)

<details>

#### Backend

- [ ] Write a route to add a new category
- [ ] Write a route to add a new book

#### Frontend

- [ ] Write a component to display a form for adding a new category that contains inputs for _at least_ the name and address.
- [ ] Display this component EITHER as part of the all-Categories view, or as its own view
- [ ] Submitting the form with a valid name/address should:
  - [ ] Make an AJAX request that causes the new category to be persisted in the database
  - [ ] Add the new category to the list of Categories without needing to refresh the page

- [ ] Write a component to display a form for adding a new book that contains inputs for _at least_ first name, last name and email
- [ ] Display this component EITHER as part of the all-Books view, or as its own view
- [ ] Submitting the form with a valid first name/last name/email should:
  - [ ] Make an AJAX request that causes the new book to be persisted in the database
  - [ ] Add the new book to the list of Books without needing to refresh the page

Congrats! You have completed your third vertical slice! Make sure to `commit -m "Feature: Add category and book"` before moving on (see `RUBRIC.md` - points are awarded/deducted for a proper git workflow)!


</details>

### Tier 4: Removing a category and Removing a book (10/57)

<details>

#### Backend

- [ ] Write a route to remove a category (based on its id)
- [ ] Write a route to remove a book (based on their id)

#### Frontend

- [ ] In the all-Categories view, include an `X` button next to each category
- [ ] Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that category to be removed from database
  - [ ] Remove the category from the list of Categories without needing to refresh the page

- [ ] In the all-Books view, include an `X` button next to each book
- [ ] Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that book to be removed from database
  - [ ] Remove the book from the list of Books without needing to refresh the page

Congrats! You have completed your fourth vertical slice! Make sure to `commit -m "Feature: Remove category and book"` before moving on (see `RUBRIC.md` - points are awarded/deducted for a proper git workflow)!


</details>

### Bonus Tier 1: Finishing Touches (6/16 EC)

<details>

- [ ] If a user attempts to add a new book or category without a required field, a helpful message should be displayed
- [ ] If a user attempts to access a page that doesn't exist (ex. `/cafeteria`), a helpful "not found" message should be displayed
- [ ] If a user attempts to view a book/category that doesn't exist, a helpful message should be displayed
- [ ] Whenever a component needs to wait for data to load from the server, a "loading" message should be displayed until the data is available
- [ ] Has a working `seed` file, that seeds the db with complete book and category instances.
- [ ] Overall, the app is spectacularly styled and visually stunning

</details>

### Bonus Tier 2: Updating a category and Updating a book (10/16 EC)

<details>

#### Backend

- [ ] Write a route to update an existing category
- [ ] Write a route to update an existing book

#### Frontend

- [ ] Write a component to display a form updating _at least_ a category's name and address
- [ ] Display this component as part of the single-category view
- Submitting the form with a valid name/address should:
  - [ ] Make an AJAX request that causes that category to be updated in the database
  - [ ] Update the category in the current view without needing to refresh the page

- [ ] Write a component to display a form updating _at least_ a book's first and last names, and email
- [ ] Display this component as part of the single-book view
- Submitting the form with a valid name/address should:
  - [ ] Make an AJAX request that causes that book to be updated in the database
  - [ ] Update the book in the current view without needing to refresh the page

</details>