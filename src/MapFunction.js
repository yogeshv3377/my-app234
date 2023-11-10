import React,{useState} from 'react'
import './MapFunction.css'






const MapFunction = () => {
  const data = [
    {
      id: 1,
      imgsrc: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600',
      brand:'Brand = BMW',
      name:' Model = X7',
      specification:'Specification = 3000cc, 3.0 L 6-cylinder Diesel',
      horsepower:'Horsepower = 250 - 280 bhp',
      cost:' Cost =  1.24 Cr.',
      rating: 3,



    },
    {
        id: 2,
        imgsrc: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Audi', 
        brand:'Brand = Audi',
        name:' Model = RS7',
        specification:'Specification = 3996cc, 3.0 L 6-cylinder Petrol',
        horsepower:'Horsepower = 591bhp',
        cost:' Cost = 2.85 Cr.',
        rating: 2,
  
    },
    {
        id: 3,
        imgsrc: 'https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=600',
        name:'Lamborghini',
        brand:'Brand = Lamborghini ',
        name:' Model = Huracan',
        specification:'Specification = 5.2 L V1,  10-cylinder Petrol',
        horsepower:'Horsepower = 500bhp',
        cost:' Cost = 4.99 Cr.', 
        rating: 5,
    },
    {
        id: 4,
        imgsrc: 'https://images.pexels.com/photos/3954429/pexels-photo-3954429.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Ferrari',
        brand:'Brand = Ferrari ',
        name:' Model =  FF GT ',
        specification:'Specification = 6262cc, 3.0 L 6-cylinder Petrol',
        horsepower:'Horsepower = 651.73 bhp',
        cost:' Cost = Rs. 5,24, Cr.',
        rating: 1, 
    },
    {
        id:5 ,
        imgsrc: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Mercedes', 
        brand:'Brand = Mercedes',
        name:' Model = A-lass',
        specification:'Specification = 5996cc, 1.3, 2.0 L 4-cylinder Petrol',
        horsepower:'Horsepower = 120 - 310 kW',
        cost:' Cost = .5 Cr.',
    },
    {
        id:6 ,
        imgsrc: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Rolls Royce', 
        brand:'Brand =Rolls Royce ',
        name:' Model = Ghost',
        specification:'Specification = 6750 cc, 6.7 L V12 6-cylinder Petrol',
        horsepower:'Horsepower = 420 kW',
        cost:' Cost =  7.95 Cr.',
    },

    {
      id:7,
      imgsrc: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Land-Cruiser/8448/1623313668941/front-left-side-47.jpg?tr=w-456',
      name:'Toyota',
      brand:'Brand = Toyota',
      name:' Model = Land Cruiser 300',
      specification:'Specification = 3346 cc , 2.0 L 4-cylinder Petrol',
      horsepower:'Horsepower = 304.41bhp',
      cost:' Cost =   2.10 Cr .',
  },
   
    {
        id:8,
        imgsrc: 'https://images.pexels.com/photos/4501407/pexels-photo-4501407.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Volvo',
        brand:'Brand = Volvo',
        name:' Model = xc60',
        specification:'Specification = 1969 cc, 2.0 L 4-cylinder Petrol',
        horsepower:'Horsepower = 291bhp',
        cost:' Cost =   67.85 Lakh..',
    },
    {
      id:9 ,
      imgsrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpp8WnZHwi1K93pkB_48cAstCa5TxGKAMkJ04lfsRKA&s',
      name:'Hummer', 
      brand:'Brand = Hummer ',
      name:' Model = H4 ',
      specification:'Specification = 3700cc, 3.0 L 4-cylinder Petrol',
      horsepower:'Horsepower = 393bhp',
      cost:' Cost =  75 Lakh.',
  },
    


  ];

  const [ search,setSearch]=useState('')
  const handleinputChange=(e)=>{setSearch(e.target.value)}

   const filterData=data.filter((searchValue)=>{

      const itemSearched=search.toLowerCase()
      return(searchValue.name.toLowerCase().includes(itemSearched)
      ||searchValue.cost.toString().includes(itemSearched)
      ||searchValue.brand.toLowerCase().includes(itemSearched)
      ||searchValue.id.toString().includes(itemSearched)
      ||searchValue.specification.toLowerCase().includes(itemSearched))

   })



  return (
    <div>

      <br/>
      <h1 className='c1'>EXPENSIVE CARS</h1>
      <br/>


      <div className='Search-bhar'>
        
         <div className='Search'>Search</div>
         {/* <div className='Input'> */}
          <input placeholder='Entere Here....' type='text' value={search} onChange={handleinputChange}/> </div>
      {/* </div> */}
      
    <div className="card-container">
  
    {filterData.map((card) => (
      <div key={card.id} className="card">
       <div style={{overflow:'hidden'}}> <img className='iimmgg' src={card.imgsrc} alt=' ' /></div>
        <h2>{card.brand}</h2>
        <h2>{card.name}</h2>
        <h2>{card.specification}</h2>
        <h2>{card.horsepower}</h2>
        <div className="rating">
                {[...Array(card.rating)].map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
        <h2>{card.rating}</h2>
        </div>

       <div className='Cost'> <h2>{card.cost}</h2> </div>

        
      </div>
     
    ))}
     </div>
  </div>
  )
}

export default MapFunction;