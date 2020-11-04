import React from 'react';
import renderer from 'react-test-renderer';
import NewOffers from './../components/NewOffer/NewOffer';

it('matches snapshot', () => {
  const tree = renderer.create(<NewOffers />).toJSON();
  expect(tree).toMatchSnapshot();
});
