import React from 'react';

const InputDisplay = ({onChange}) => {
  return (
    <div>
      <input type="text" name='search' onChange={onChange}/>
    </div>
  );
};

export default InputDisplay;