import React from 'react';
import renderer from 'react-test-renderer';
import Info from '../containers/PorudctDetails/Info';

it('matches snapshot', () => {
  const x= renderer.create(<Info />).toJSON();
  expect(x).toMatchSnapshot();
});