import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Description from '../Description/Description';

const FeatureCard = ({imgPath, imgDesc, featHeader, featDesc, classes}) => {
    return ( <div className={"w-64 sm:pb-16 text-center "+classes}>
        <img className="h-24 w-24 inline-block bg-green-400" src={imgPath} alt={imgDesc}/>
        <SubTitle classes=" my-3" text={featHeader}/>
        <Description classes="" text={featDesc}/>
    </div> );
}
 
export default FeatureCard;