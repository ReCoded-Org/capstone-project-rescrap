import React from 'react';

const Description = ({ classes, text }) => {
  return <p className={'text-base font-normal ' + classes}>{text}</p>;
};

export default Description;