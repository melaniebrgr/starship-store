import React from 'react';

export default function CartDetails({
  cart,
}) {
  console.log(cart);
  return (
    <aside>
      <header>
        <h4>
          Your Cart Summary:
        </h4>
      </header>
      <div>
        { cart.map( (item, index) => <div key={index}>{`${index}. ${item.name}: ${item.cost_in_credits}`}</div> ) }
        <div><strong>Total:</strong> {cart.reduce((acc, nextItem) => {
          let nextCost = Number(nextItem.cost_in_credits);
          return !isNaN(nextCost) ?  nextCost + acc : acc;
        }, 0)}</div>
      </div>
    </aside>
  );
}