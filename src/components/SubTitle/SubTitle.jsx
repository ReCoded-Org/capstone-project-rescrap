import React from 'react';

const SubTitle = ({ classes, text }) => {
  return <h2 className={'text-2xl thin' + classes}>{text}</h2>;
};

export default SubTitle;
