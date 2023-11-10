import React, { useState } from 'react'

function Favoritecolor(){
    const [colour , setcolor]= useState("red");



  return (
    <div>
        <h1>my colour {colour}</h1>
        <button
        type='button'
        onClick={()=>setcolor("blue")}
        >blue</button>



{/* <h1>my colour{colour}</h1> */}
        <button
        type='button'
        onClick={()=>setcolor("red")}
        >red</button>

<button
        type='button'
        onClick={()=>setcolor("yellow")}
        >yellow </button>

    </div>
  )
}

export default Favoritecolor;

