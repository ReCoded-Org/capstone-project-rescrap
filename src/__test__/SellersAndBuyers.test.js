import React from 'react';
import renderer from 'react-test-renderer';
import SellersAndBuyers from '../components/SellersAndBuyers/SellersAndBuyers';


it("matches the snapshot",()=>{
    const tree = renderer.create(<SellersAndBuyers/>).toJSON();
    expect(tree).toMatchSnapshot();
})