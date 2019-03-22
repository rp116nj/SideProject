import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories, deleteACategory , createNewCategory } from '../reducers/categoryReducer';
export class AllCategories extends Component {
  // constructor(props) {
  //   super(props)
  //   this.handleClick = this.handleClick.bind(this)
  // }
  componentDidMount() {
    this.props.getCategories();
  }

  // handleClick = (event) => {
  // console.log('handleclickEvent', event.target )
  //  this.props.deleteACategory(event.target.value)
  //  }
  render() {
    console.log('props', this.props);
    const categories = this.props.categories;
    console.log('in component', categories);
    return categories.map(category => {
      return (
        <div key={category.id} className="individual_category">
          <Link to={`/categories/${category.id}`}>{category.name}</Link>
          <p>Description: {category.description}</p>
          <img src={category.imageUrl} />
          <div>
            <button type="button" value={category.id} onClick={() =>  this.props.deleteACategory(category.id) }>Delete</button>
          </div>
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  //console.log('state', state);
  console.log('state', state.category.categories);
  return {
    categories: state.category.categories,
   
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories());
    },
    createNewCategory: (category) => {
      dispatch(createNewCategory(category))
    },
    deleteACategory: (id) => {
      dispatch(deleteACategory(id))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCategories);
