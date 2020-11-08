import React from 'react';
import renderer from 'react-test-renderer';
import AddProduct from '../AddProduct';

it("matches the snapshot",()=>{
   const tree= renderer.create(<AddProduct/>).toJSON();
   expect(tree).toMatchSnapshot();
})

