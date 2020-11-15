import React from 'react';
import SubTitle from '../../components/SubTitle/SubTitle';
import Title from '../../components/Title/Title';
const Intro = (props) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center shadow-md mb-2">
        <div className="flex justify-center w-full mx-6 my-4">
          <img
            src={props.imgSrc}
            alt={props.description}
            className="justify-self-center"
          />
        </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2 lg:w-1/2">
        <div className="flex flex-col justify-center overflow-hidden  w-1/2 p-2 ">
          <Title
            classes="uppercase font-semibold leading-5  tracking-widest  text-left  my-2  "
            text={props.productName}
          />

          <div className="text-base flex   my-3   text-gray-700">
            <p>
          {props.description}
            </p>
          </div>
          <SubTitle
            text={props.price}
            classes=" text-green-200 uppercase font-semibold leading-5  tracking-widest  text-left  my-2  "
          />
        </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
