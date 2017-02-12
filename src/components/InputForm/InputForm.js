import React from 'react';

import Button from '../Button/Button';

export default function InputForm({
  title,
  children,
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

