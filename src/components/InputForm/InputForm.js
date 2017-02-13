import React, { PropTypes } from 'react';

import Button from '../Button/Button';

export default function InputForm({
  children,
  title,
  onChangeTitle,
  onClickSave,
}) {
  return (
    <form>
      <label>{children}
        {' '}
        <input 
          type="text"
          value={title}
          placeholder="Millenium Falcon"
          onChange={onChangeTitle} />
      </label>
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