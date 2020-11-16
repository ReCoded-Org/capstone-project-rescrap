import React from "react";

const Input = ({ inputType="text", handleChange=(event)=>{console.log("An input is without handler function!!!")}, inputValue="",inputClasses="",inputName="",inputId="",inputPlaceholder="" }) => {
  return (
  
    <input
      type={inputType}
      onChange={(event) => {
        handleChange(event);
      }}
      value={inputValue}
      className={"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight "+inputClasses}
      name={inputName}
      id={inputId}
    placeholder={inputPlaceholder}
    />
  );
};

export default Input;
