import React, { PropTypes } from 'react';

export default function Button({
  type,
  children,
  onClick
}) {
 return (
  <button 
    type={type}
    onClick={onClick} >
    {children}
  </button>   
 );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}