import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchActions';

import CartDetails from '../../components/CartDetails/CartDetails';
import StarshipCard from '../../components/StarshipCard/StarshipCard';

class Cart extends Component {
  render() {
    let { cart, removeItemFromCart } = this.props;
    return (
      <div>
        <h2>Starship Cart</h2>
        {cart.length > 0 ? <CartDetails cart={cart} /> : ''}
        {cart.length > 0 ? cart.map((item, index) => <StarshipCard key={index} item={item} buttonText="Remove from cart" onClick={removeItemFromCart}  />) : <p>Nothing saved to cart.</p>}
      </div> 
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.store.cart
  }
}
const mapDispatchToProps = {
  removeItemFromCart: searchActions.removeItemFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);