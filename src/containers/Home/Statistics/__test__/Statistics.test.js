import React from 'react';
import Statistics from '../../Statistics/Statistics';
import renderer from 'react-test-renderer';

it('matches snapshot', () => {
  const tree = renderer.create(<Statistics />).toJSON();
  expect(tree).toMatchSnapshot();
});
