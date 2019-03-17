import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from '../reducers/bookReducer';
import { Link } from 'react-router-dom';

export class SingleBook extends Component {
  componentDidMount() {
    this.props.getBook()
  }
  render() {
    console.log('props', this.props)
    const book = this.props.book
    console.log('selected book', book)
    const bookCategory = book.bookCategory
    console.log('bookCategory:', bookCategory)
    return (
      book ?
        <div>
          <h3>Name:{book.name}</h3>
          <h4>Author:{book.authorName}</h4>
          {/* <h5>Category:{bookCategory.name}</h5> */}
          <h6> Edition:{book.edition}</h6>
          <img src= {book.imageUrl} />
        </div> : null
    )
  }
}
const mapStateToProps = state => {
  console.log('state', state);
  return {
    book: state.book.selectedBook
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  const bookId = Number(ownProps.match.params.id)
  return {
    getBook: () => dispatch(getBook(bookId))
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(SingleBook)
