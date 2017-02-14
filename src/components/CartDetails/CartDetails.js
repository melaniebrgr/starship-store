import React from 'react';

export default function CartDetails({
  cart,
}) {
  const makeTableRows = (item, index) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{item.name}</td>
        <td>{item.cost_in_credits}</td>
      </tr>  
    );
  }  
  return (
    <aside>
      <header>
        <h4>
          Your Cart Summary:
        </h4>
      </header>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            { cart.map( (item, index) => makeTableRows(item, index) ) }
            <tr>
              <td colSpan="2"><strong>Total:</strong></td>
              <td>{cart.reduce((acc, nextItem) => {
                let nextCost = Number(nextItem.cost_in_credits);
                return !isNaN(nextCost) ?  nextCost + acc : acc;
              }, 0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </aside>
  );
}