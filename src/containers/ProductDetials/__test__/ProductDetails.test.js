import React from 'react';
import renderer from 'react-test-renderer';
import ProductDetails from '../containers/PorudctDetails';

it('matches snapshot', () => {
  const tree = renderer.create(<ProductDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});