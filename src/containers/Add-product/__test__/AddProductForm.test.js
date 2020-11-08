import React from 'react';
import renderer from 'react-test-renderer';
import AddProductForm from '../AddProductForm';

it("matches the snapshot",()=>{
   const tree= renderer.create(<AddProductForm/>).toJSON();
   expect(tree).toMatchSnapshot();
})

