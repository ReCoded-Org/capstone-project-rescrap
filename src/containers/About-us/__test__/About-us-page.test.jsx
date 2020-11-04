import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AboutUs from '../About-us-page';

it("matches the snapshot", () =>{
    const tree = renderer.create(<AboutUs/>).toJSON();
    expect(tree).toMatchSnapshot();
})