import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AboutUsInfo from '../About-us-info';

it("matches the snapshot", () =>{
    const tree = renderer.create(<AboutUsInfo/>).toJSON();
    expect(tree).toMatchSnapshot();
})