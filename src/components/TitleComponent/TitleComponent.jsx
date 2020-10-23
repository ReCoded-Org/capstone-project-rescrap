import React from 'react';

const Title = ({ classes, text }) => {
  return <h1 className={'text-3xl thin' + classes}>{text}</h1>;
};

export default Title; 