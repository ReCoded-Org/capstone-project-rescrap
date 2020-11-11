import React, {useState ,useEffect} from 'react';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import SubTitle from '../../components/SubTitle/SubTitle';


   

const cards = [];
for(let i=0;i<12;i++){
  cards.push(<Card 
    cardTitle={i}
  />)
}
console.log(cards);

function SuggestedProducts() {
  const [start, setStart] = useState(0);
  useEffect(() => {
    setStart(0);
  }, [])
  return (<div className="mx-10 flex flex-col justify-center" >
    <Title classes="uppercase font-semibold leading-5  tracking-widest  text-left p-2 my-2 mx-4 "

  text='Suggested products' />
      <div className="flex flex-wrap">
      <div class="flex items-center ">
       <i  className=" far fa-angle-left text-green-100 hover:text-black font-bold hover:shadow-lg rounded-full text-6xl "
        onClick={(event)=>{
         if(start-4>=0)
        setStart(start-4)
      }}>  </i>
      </div>
     

      {(()=>{
        let disp=[];
        for(let i=start;i<4+start;i++){
        disp.push(cards[i]);
      }
      return disp;
      })()}

      <div class="flex items-center ">

<i className="far fa-angle-right  text-green-100 hover:text-black font-bold hover:shadow-lg  text-6xl"
  onClick={(event)=>{
        if(start+4 <cards.length)
        setStart(start+4)
      }}> </i>
      </div>


      </div>
      
      </div>
);
}

export default SuggestedProducts;


