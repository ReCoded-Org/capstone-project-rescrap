import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../containers/PorudctDetails/Intro';

it('matches snapshot', () => {
  const y = renderer.create(<Intro />).toJSON();
  expect(y).toMatchSnapshot();
