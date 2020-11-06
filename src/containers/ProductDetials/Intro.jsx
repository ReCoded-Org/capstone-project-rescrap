import React from 'react';
import SubTitle from '../../components/SubTitle/SubTitle';
import Title from '../../components/Title/Title';
const Intro = () => {
  return (<div>
    <div className="flex sm:flex-row md:flex-row lg:flex-row  justify-center ">
 
    <div className="w-full md:w-1/2 lg:w-1/2 p-2 mx-6 my-4" ><img src="https://cdn.mos.cms.futurecdn.net/3KnPinofHaKaQDaeRov3Qg-320-80.jpg" alt="bottle" /></div>

<div className=" overflow-hidden  w-1/2 p-2 ">
<Title classes="uppercase font-semibold leading-5  tracking-widest  text-left  my-2  "
  text='Name of product' />

<div className='text-base flex   my-3   text-gray-700'>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum quis nunc ac efficitur consectetur adipiscing elit Vivamus vestibulum quis nunc ac efficitur consectetur adipiscing elit Vivamus vestibulum quis nunc ac efficitur consectetur adipiscing elit Vivamus vestibulum quis nunc ac efficitur consectetur adipiscing elit 
  </p>
               
</div>
<SubTitle
  text='5000 YR'
  classes=" text-green-200 uppercase font-semibold leading-5  tracking-widest  text-left  my-2  " />

</div>

</div>
    </div>
   
    
  )
}
export default Intro;