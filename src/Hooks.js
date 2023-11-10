import React,{useState,useEffect} from 'react'

const Hooks = () => {
    const[count,setCount]=useState(1); 
    console.log("Clicked count:"+count);
    useEffect(count=>console.log("clicked"))
    const increment=()=>{ setCount(count+1)}
  return (
    <div>
         <center>
            <h1>{count}</h1>
                 {/* <button onClick={()=>setCount(count+1)}> Click</button> */}
                 <button onClick={increment}>ok</button>
        </center>
    </div>
  )
}

export default Hooks