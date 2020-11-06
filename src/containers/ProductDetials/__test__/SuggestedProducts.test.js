import React from 'react';
import renderer from 'react-test-renderer';
import SuggestedProducts from '../SuggestedProducts';

it('matches snapshot', () => {
  const tree = renderer.create(<SuggestedProducts />).toJSON();
  expect(tree).toMatchSnapshot();
});