import React from 'react';
import renderer from 'react-test-renderer';
import ProductsDetials from '../ProductDetials';

it('matches snapshot', () => {
  const tree = renderer.create(<ProductsDetials />).toJSON();
 expect(tree).toMatchSnapshot();
});