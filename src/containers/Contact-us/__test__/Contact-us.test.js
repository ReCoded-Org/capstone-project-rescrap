import React from 'react';
import renderer from 'react-test-renderer';
import ContactUs from '../Contact-us';

it("matches the snapshot", () =>{
    const tree = renderer.create(<ContactUs/>).toJSON();
    expect(tree).toMatchSnapshot();
})