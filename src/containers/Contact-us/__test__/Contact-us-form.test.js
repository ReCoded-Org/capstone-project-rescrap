import React from 'react';
import renderer from 'react-test-renderer';
import ContactUsForm from '../Contact-us-form';

it("matches the snapshot", () =>{
    const tree = renderer.create(<ContactUsForm/>).toJSON();
    expect(tree).toMatchSnapshot();
})