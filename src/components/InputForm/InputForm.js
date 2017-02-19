import React, { PropTypes } from 'react';

import Button from '../Button/Button';

export default function InputForm({
  children,
  value,
  onChangeValue,
  onClickSave,
}) {
  return (
    <form className="form-inline">
      <div className="form-group">
        <label>{children}</label>
          {' '}
          <input 
            type="text"
            value={value}
            placeholder="e.g. Millennium Falcon"
            onChange={onChangeValue}
            className="form-control" />
      </div>
      {' '}
      <Button
        type="submit"
        onClick={onClickSave}>
        Submit
      </Button>
    </form>    
  );
}

InputForm.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired
}