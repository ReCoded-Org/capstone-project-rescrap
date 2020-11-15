import React from 'react';
import renderer from 'react-test-renderer';
import FeatureCard from './../components/SellersAndBuyers/FeatureCard';


it("matches the snapshot",()=>{
    const tree = renderer.create(<FeatureCard/>).toJSON();
    expect(tree).toMatchSnapshot();
})