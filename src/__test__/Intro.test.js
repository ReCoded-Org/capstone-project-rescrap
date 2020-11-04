import React from 'react';
import renderer from 'react-test-renderer';
import Intro from './../components/Intro/Intro';

it("matches the snapshot",()=>{
    const tree = renderer.create(<Intro/>).toJSON();
    expect(tree).toMatchSnapshot();
})