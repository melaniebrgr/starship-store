import React from 'react';

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
      <button 
        type="submit"
        onClick={onClickSave} >
        Submit
      </button>
    </form>    
  );
}

