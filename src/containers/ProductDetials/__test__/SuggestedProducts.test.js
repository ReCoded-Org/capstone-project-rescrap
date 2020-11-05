import React from 'react';
import renderer from 'react-test-renderer';
import SuggestedProducts from '../containers/PorudctDetails/SuggestedProducts';

it('matches snapshot', () => {
  const tree = renderer.create(<SuggestedProducts />).toJSON();
  expect(tree).toMatchSnapshot();
});