import React,{useState} from 'react'
import './Tabel.css'

const Tabel = () => {
    const data  =[
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
        { id: 4, name: 'yogi', age: 24 },

      ];

    const [ search,setSearch]=useState('')
    const handleinputChange=(e)=>{setSearch(e.target.value)}

     const filterData=data.filter((searchValue)=>{

        const itemSearched=search.toLowerCase()
        return(searchValue.name.toLowerCase().includes(itemSearched)||searchValue.id.toString().includes(itemSearched)||searchValue.age.toString().includes(itemSearched))

     })
    
      const rows = filterData.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.id}</td>

        </tr>
      ));
    
  return (
    <div >

    <input placeholder='Entere Here....' type='text' value={search} onChange={handleinputChange}/> 


        <h1>4</h1>
      <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>id</th>

        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>
  )
}

export default Tabel