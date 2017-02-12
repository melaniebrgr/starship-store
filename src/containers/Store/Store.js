import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as storeActions from '../../actions/storeActions';

import InputForm from '../../components/InputForm/InputForm';
import StarshipCard from '../../components/StarshipCard/StarshipCard';

class Store extends Component {
  constructor() {
    super();
    this.state = {
      item: {
        title: ''
      }
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }
  onChangeTitle(e) {
    let value = e.target.value;
    let item = Object.assign({}, this.state.item, {title: value});
    this.setState({ item });
  }
  onClickSave(e) {
    e.preventDefault();
    if (this.state.item.title) {
      this.props.loadItems('starships', this.state.item.title);
      this.setState({ item: { title: '' } });
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
          title={this.state.item.title} 
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