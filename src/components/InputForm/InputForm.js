import React, { PropTypes } from 'react';

import Button from '../Button/Button';

export default function InputForm({
  children,
  title,
  onChangeTitle,
  onClickSave,
}) {
  return (
    <form className="form-inline">
      <div className="form-group">
        <label>{children}</label>
          {' '}
          <input 
            type="text"
            value={title}
            placeholder="e.g. Millennium Falcon"
            onChange={onChangeTitle}
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
  title: PropTypes.string.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired
}