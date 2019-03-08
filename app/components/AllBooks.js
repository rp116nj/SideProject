import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks } from '../reducers/bookReducer'
export class AllBooks extends Component {
  componentDidMount() {
    this.props.getBooks()
  }
  render() {
    console.log('props', this.props)
    const books = this.props.books;
    console.log('in component', books);
    return books.map(book => {
      return (
        <div key={book.id}>
          <Link to={'/books/${book.id'}>{book.Name}</Link>
          <p>Author's Name : {book.AuthorName}</p>
          <img src= {book.imageurl} />
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    books: state.book.books,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => { dispatch(getBooks()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks);
