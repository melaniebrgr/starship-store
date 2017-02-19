import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchActions';

import InputForm from '../../components/InputForm/InputForm';
import StarshipCard from '../../components/StarshipCard/StarshipCard';

class Search extends Component {
  constructor() {
    super();

    this.onClickSave = this.onClickSave.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  state = {
    query: ''
  }
  onChangeValue(e) {
    let query = e.target.value;
    this.state = Object.assign({}, this.state, { query });
    this.forceUpdate();
  }
  onClickSave(e) {
    e.preventDefault();
    if (this.state.query) {
      this.props.loadItems('starships', this.state.query);
      this.state = Object.assign({}, this.state, { query: '' });
      this.forceUpdate();
    }
  }
  isSearchResultsEmpty(searchResults) {
    return Object.keys(searchResults).length === 0 && searchResults.constructor === Object;
  }
  isNoSearchResultsCount(searchResults) {
    return searchResults.count !== undefined && searchResults.count === 0;
  }
  mapSearchResultsToStarshipsCard(searchResults) {
    return searchResults.results.map((item, index) => <StarshipCard key={index} item={item} buttonText="Add to cart" onClick={this.props.addItemToCart} />);
  }
  render() {
    const displaySearchResults = searchResults => {
      return !this.isSearchResultsEmpty(searchResults) ? (this.isNoSearchResultsCount(searchResults) ? <p>No results.</p> : this.mapSearchResultsToStarshipsCard(searchResults)) : null;
    }
    return (
      <div>
        <h2>Search for starships on sale</h2>
        <InputForm 
          value={this.state.query} 
          onChangeValue={this.onChangeValue} 
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