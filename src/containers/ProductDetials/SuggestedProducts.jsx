import React, {useState ,useEffect} from 'react';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';

const cards = [];
for(let i=0;i<12;i++){
  cards.push(<Card 
    cardTitle={i}
  />)
}
console.log(cards);

function SuggestedProducts() {
  const [itemsToShow,setItemsToShow]=useState(0);

  
  window.addEventListener("resize",(event)=>{
    // console.log(event.target.innerWidth);
    const items=Math.floor((event.target.innerWidth)/300);
    if(!(items>4))
    setItemsToShow(items);
    else if(items===0)
    setItemsToShow(1);
    
  })

  const [start, setStart] = useState(0);
  useEffect(() => {
    setStart(0);
    setItemsToShow((window.screen.width)/384);
  }, []);
  useEffect(() => {
  //  console.log(itemsToShow);
  }, [itemsToShow])

  return (<div className="mx-10 flex flex-col justify-center" >
    <Title classes="uppercase font-semibold leading-5  tracking-widest  text-left p-2 my-2 mx-4 "

  text='Suggested products' />
      <div className="flex flex-wrap justify-center">
      <div class="flex items-center ">
       <i  className=" far fa-angle-left text-green-100 hover:text-black font-bold hover:shadow-lg rounded-full text-6xl "
        onClick={(event)=>{
         if(start-itemsToShow>=0)
        setStart(start-itemsToShow)
      }}>  </i>
      </div>
     

      {(()=>{
        let disp=[];
        for(let i=start;i<itemsToShow+start;i++){
        disp.push(cards[i]);
      }
      return disp;
      })()}

      <div class="flex items-center ">

<i className="far fa-angle-right  text-green-100 hover:text-black font-bold hover:shadow-lg  text-6xl"
  onClick={(event)=>{
        if(start+itemsToShow <cards.length)
        setStart(start+itemsToShow)
      }}> </i>
      </div>


      </div>
      
      </div>
);
}

export default SuggestedProducts;


