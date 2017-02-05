import React, { Component } from 'react';

export default class Store extends Component {
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
    alert(`Saving ${this.state.item.title}`);
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
      </div>
    )
  }
}