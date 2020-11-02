import React from 'react';
import Title from '../Title/Title';
import Description from '../Description/Description';

const FeatureCard = ({imgPath, imgDesc, featHeader, featDesc}) => {
    return ( <div className="w-64 text-center">
        <img className="h-24 w-24 inline-block bg-green-400" src={imgPath} alt={imgDesc}/>
        <Title classes=" my-3" text={featHeader}/>
        <Description classes="" text={featDesc}/>
    </div> );
}
 
export default FeatureCard;