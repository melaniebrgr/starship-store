import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchActions';

import InputForm from '../../components/InputForm/InputForm';
import StarshipCard from '../../components/StarshipCard/StarshipCard';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }
  onChangeTitle(e) {
    let query = e.target.value;
    this.setState({ query });
  }
  onClickSave(e) {
    e.preventDefault();
    if (this.state.query) {
      this.props.loadItems('starships', this.state.query);
      this.setState({ query: '' });
    }
  }
  render() {
    const displaySearchResults = searchResults => {
      if (Object.keys(searchResults).length === 0 && searchResults.constructor === Object) return;
      if (searchResults.count !== undefined && searchResults.count === 0) return <p>No results.</p>;
      return searchResults.results.map((item, index) => <StarshipCard key={index} item={item} buttonText="Add to cart" onClick={this.props.addItemToCart} />);
    }
    return (
      <div>
        <h2>Search for starships on sale</h2>
        <InputForm 
          title={this.state.query} 
          onChangeTitle={this.onChangeTitle} 
          onClickSave={this.onClickSave}>
            Search inventory
        </InputForm>
        { displaySearchResults(this.props.searchResults) }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    searchResults: state.store.searchResults,
    cart: state.store.cart
  }
}
const mapDispatchToProps = {
  loadItems: searchActions.loadItems,
  addItemToCart: searchActions.addItemToCart
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);