import React from 'react';

export default function StarshipCard({
  item
}) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.model}</p>
      <ul>
        <li>crew: {item.crew}</li>
        <li>hyperdrive rating: {item.hyperdrive_rating}</li>
        <li>passengers: {item.passengers}</li>
        <li>cost: {item.cost_in_credits} credits</li>
      </ul>
    </div>
  );
}