import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as storeActions from '../../actions/storeActions';

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
      this.props.createStoreItem(this.state.item);
      this.setState({ item: { title: '' } });
    }
  }
  render() {
    return (
      <div>
        <h1>Starship Store</h1>
        <form>
          <label>Add Starship to Store 
            <input 
              type="text"
              value={this.state.item.title}
              placeholder="Millenium Falcon"
              onChange={this.onChangeTitle} />
          </label>
          <button 
            type="submit"
            onClick={this.onClickSave} >
            Submit
          </button>
        </form>
        <ul>
          {this.props.store.map( (item, index) => <li key={index}>{item.title}</li> )}
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
  createStoreItem: storeActions.createStoreItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);