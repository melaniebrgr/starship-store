import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as storeActions from '../../actions/storeActions';

import InputForm from '../../components/InputForm/InputForm';

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
      this.props.loadItems(this.state.item.title);
      this.setState({ item: { title: '' } });
    }
  }
  render() {
    return (
      <div>
        <InputForm 
          title={this.state.item.title} 
          onChangeTitle={this.onChangeTitle} 
          onClickSave={this.onClickSave}>
            Add Starship to Store
        </InputForm>
        <ul>
          { this.props.store.map((item, index) => <li key={index}>{item.name}</li>) }
        </ul>
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