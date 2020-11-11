import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import Signup from '../Signup';

it("matches the snapshot",()=>{
   const tree= renderer.create(<Signup/>).toJSON();
   expect(tree).toMatchSnapshot();
})

