import React from 'react';
import ReactDOM from 'react-dom';
import AboutUsTitle from '../About-us-title';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(AboutUsTitle, div)
})