import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories } from '../reducers/categoryReducer'


export class AllCategories extends Component {
  componentDidMount() {
    this.props.getCategories()
  }
  render() {
    console.log('props', this.props)
    const categories = this.props.categories;
     console.log('in component', categories);
    return categories.map(category => {
      return (
        <div key={category.id}>
          <Link to={'/categories/${category.id'}>{category.Name}</Link>
          <p>Description: {category.Description}</p>
          <img src= {category.imageUrl} />
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  //console.log('state', state);
  console.log('state', state.category.categories)
  return {
   categories: state.category.categories,
  }
}

const mapDispatchToProps = dispatch => {
  return {
     getCategories: () => {dispatch(getCategories())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);
