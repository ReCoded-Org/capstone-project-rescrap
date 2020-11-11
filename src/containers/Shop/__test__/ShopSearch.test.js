import React from 'react';
import ShopSearch from '../../Shop/ShopSearch';
import renderer from 'react-test-renderer';

it('matches snapshot', () => {
  const tree = renderer.create(<ShopSearch />).toJSON();
  expect(tree).toMatchSnapshot();
});
