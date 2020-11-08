import React from 'react';
import SubTitle from '../../components/SubTitle/SubTitle';
import Title from '../../components/Title/Title';
const Info = () => {
  return (
    <div className="mx-10 flex flex-col justify-center ">
      <div className="flex flex-row px-10">
        <div className="w-1/2">
          <SubTitle
            text="Details"
            classes="  uppercase font-semibold leading-5  tracking-widest  text-left  my-2  "
          />

          <div className="flex flex-col w-3/5 text-gray-700">
            <div className="flex flex-row justify-between border-b-2 border-gray-400 my-4">
              <SubTitle text="category" /> <SubTitle text="Plastic" />
            </div>
            <div className="flex flex-row justify-between border-b-2 border-gray-400 my-4">
              <SubTitle text="Quantity" /> <SubTitle text="2 kg" />
            </div>
            <div className="flex flex-row justify-between border-b-2 border-gray-400 my-4">
              <SubTitle text="Location" />{' '}
              <SubTitle text="Haddah street,Sana'a" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <SubTitle
            text="Sellers"
            classes="  uppercase font-semibold   my-2  "
          />
          <div className="flex flex-col w-1/3 text-gray-700 ">
            <div className="flex flex-row justify-between my-2 ">
              <div className="text-green-100">
                <i className="fa fa-user text-2xl" />{' '}
              </div>{' '}
              <h3 className="text-green-100 text-xl mx-4">Mr Mohammed</h3>
            </div>
            <div className="flex flex-row justify-between my-2 ">
              <div className="text-green-100">
                <i className="fa fa-at  text-2xl" />{' '}
              </div>{' '}
              <email className="border-b-2 border-gray-300 text-xl mx-4 ">
                {' '}
                malthawr@gmail.com{' '}
              </email>
            </div>
            <div className="flex flex-row justify-between my-2  ">
              <div className="text-green-100">
                <i className="fas fa-phone-alt text-2xl" />{' '}
              </div>{' '}
              <h3 className="text-xl ">00967 77777777</h3>
            </div>
            <div className="flex flex-row justify-between my-2 ">
              <div className="text-green-100">
                <i class="fas fa-globe-americas text-2xl" />{' '}
              </div>{' '}
              <h3 className="text-xl">Location</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
