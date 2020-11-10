import React from 'react';
import renderer from 'react-test-renderer';
import ContactUsText from '../Contact-us-Text';

it("matches the snapshot", () =>{
    const tree = renderer.create(<ContactUsText/>).toJSON();
    expect(tree).toMatchSnapshot();
})