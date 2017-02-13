import React, { Component } from 'react';
import { connect } from 'react-redux';

import StarshipCard from '../../components/StarshipCard/StarshipCard';

class Cart extends Component {
  render() {
    console.log(this.props);
    let { cart } = this.props;
    return (
      <div>
        <h2>Starship Cart</h2>
        {cart.length ? cart.map((item, index) => <StarshipCard key={index} item={item} buttonText="Remove from cart" />) : <p>Nothing saved to cart yet.</p>}
      </div> 
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.store.cart
  }
}
// const mapDispatchToProps = {
  // removeItemFromCart: searchActions.removeItemFromCart,
// };
export default connect(mapStateToProps)(Cart);

//onClick={this.props.removeItemFromCart}