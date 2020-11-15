import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../NotFound';

it("matches the snapshot", () =>{
    const tree = renderer.create(<NotFound/>).toJSON();
    expect(tree).toMatchSnapshot();
})