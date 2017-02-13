import React, { PropTypes } from 'react';

import Button from '../Button/Button';

export default function StarshipCard({
  item,
  onClick,
  buttonText,
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
      <Button
        type="button"
        onClick={ () => onClick(item) }>
          {buttonText}
      </Button>
    </div>
  );
}

StarshipCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    crew: PropTypes.string.isRequired,
    hyperdrive_rating: PropTypes.string.isRequired,
    passengers: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
  buttonText: PropTypes.string
}