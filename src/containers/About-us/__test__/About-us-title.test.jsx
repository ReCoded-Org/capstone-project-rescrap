import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AboutUsTitle from '../About-us-title';

it("matches the snapshot", () =>{
    const tree = renderer.create(<AboutUsTitle/>).toJSON();
    expect(tree).toMatchSnapshot();
})