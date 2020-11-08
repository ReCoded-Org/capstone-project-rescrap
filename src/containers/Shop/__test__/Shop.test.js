import React from 'react';
import Shop from '../../Shop/Shop';
import renderer from 'react-test-renderer';

it('matches snapshot', () => {
  const tree = renderer.create(<Shop />).toJSON();
  expect(tree).toMatchSnapshot();
});
