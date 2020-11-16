import React from 'react';
import SubTitle from '../../components/SubTitle/SubTitle';

const Info = (props) => {
  return (
    <div className="mx-10 flex flex-col justify-center ">
      <div className="flex flex-wrap justify-center px-10">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <SubTitle
            text="Details"
            classes="  uppercase font-semibold leading-5  tracking-widest  text-left  my-2  "
          />

          <div className="flex flex-col w-3/5 text-gray-700">
            <div className="flex flex-row justify-between border-b-2 border-gray-400 my-4">
              <SubTitle text="category" /> <SubTitle text={props.category} />
            </div>
            <div className="flex flex-row justify-between border-b-2 border-gray-400 my-4">
              <SubTitle text="Quantity" /> <SubTitle text={props.quantity} />
            </div>
            <div className="flex flex-row justify-between border-b-2 border-gray-400 my-4">
              <SubTitle text="Location" />
              <SubTitle text={props.addressDetails} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2">
          <SubTitle
            text="Sellers"
            classes="  uppercase font-semibold my-2  "
          />
          <div className="flex flex-col w-2/3 text-gray-700 ">
            <div className="flex flex-row justify-between my-4 ">
              <div className="text-green-100">
                <i className="fa fa-user text-2xl" />
              </div>
              <h3 className="text-green-100 text-xl mx-4">{props.loggedIn?props.owner.name:"Login to see owner info"}</h3>
            </div>
            <div className="flex flex-row justify-between my-4 ">
              <div className="text-green-100">
                <i className="fa fa-at  text-2xl" />
              </div>
              <h3 className="border-b-2 border-gray-300 text-xl mx-4 ">
                
              {props.loggedIn?props.owner.email:"Login to see owner info"}
              </h3>
            </div>
            <div className="flex flex-row justify-between my-4  ">
              <div className="text-green-100">
                <i className="fas fa-phone-alt text-2xl" />
              </div>
              <h3 className="text-xl ">  {props.loggedIn?props.owner.phoneNumber:"Login to see owner info"}</h3>
            </div>
            {/* <div className="flex flex-row justify-between my-2 ">
              <div className="text-green-100">
                <i class="fas fa-globe-americas text-2xl" />
              </div>
              <h3 className="text-xl">{props.product.addressDetails}</h3>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
