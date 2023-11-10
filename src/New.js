import React,{useState, useEffect} from 'react';

const New = () => {

    const[count,setCount]=useState(1*1); 
    console.log("Clicked count:"+count);
    useEffect(()=>console.log("clicked"));
    const increse=()=>{
        setCount(count*2)
                 
      }


                  return (
    <div>
        <h1>clicked count {count}</h1>
 <button onClick={increse}>
     Click
     </button> 

    </div>
  )
}

export default New;