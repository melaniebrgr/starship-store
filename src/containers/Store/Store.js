import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as storeActions from '../../actions/storeActions';

import InputForm from '../../components/InputForm/InputForm';
import StarshipCard from '../../components/StarshipCard/StarshipCard';

class Store extends Component {
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
    const displayResults = store => {
      if (Object.keys(store).length === 0 && store.constructor === Object) return;
      if (store.count !== undefined && store.count === 0) return <p>No results.</p>;
      return store.results.map((item, index) => <StarshipCard key={index} item={item} />);
    }
    return (
      <div>
        <InputForm 
          title={this.state.query} 
          onChangeTitle={this.onChangeTitle} 
          onClickSave={this.onClickSave}>
            Add Starship to Store
        </InputForm>
        { displayResults(this.props.store) }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    store: state.store
  }
}
const mapDispatchToProps = {
  loadItems: storeActions.loadItems
};
export default connect(mapStateToProps, mapDispatchToProps)(Store);