import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../Intro';

it('matches snapshot', () => {
  const y = renderer.create(<Intro />).toJSON();
  expect(y).toMatchSnapshot();
});