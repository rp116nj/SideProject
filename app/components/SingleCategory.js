import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../reducers/categoryReducer';
import { Link } from 'react-router-dom';

export class SingleCategory extends Component {
  componentDidMount() {
    this.props.getCategory()
  }
  render() {
    console.log('props', this.props);
    const category = this.props.category.category;
    const booksInCategory = this.props.category.allBooksInCategory;
    return (
      category ?
        <div>
          <div>
            <h3>Name:{category.name}</h3>
            <h4>Location:{category.location}</h4>
            <p>Description:{category.description}</p>
          </div>
          <div>
            {booksInCategory.map(book => {
              return (
                <div key={book.id}>
                  <Link to={`/books/${book.id}`}>{book.name}</Link>
                  <p>Author's Name : {book.authorName}</p>
                  <img src={book.imageurl} />
                </div>
              );
            })}
          </div>
        </div> : null
    );
  }
}
const mapStateToProps = state => {
  console.log('state', state);
  return {
    category: state.category.selectedCategory
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  //console.log('ownProps', ownProps.match.params)
  const categoryId = Number(ownProps.match.params.id);
  console.log('categoryId', categoryId);
  return {
    getCategory: () => dispatch(getCategory(categoryId)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCategory);
