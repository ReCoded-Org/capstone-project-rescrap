import React from 'react';

const Button = (props)=>{   
  return (
  <button className={"rounded-full py-2 px-4"+props.btnClasses} onClick={props.btnClickHandler}>{props.btnText}</button>
  );
}

export default Button; 