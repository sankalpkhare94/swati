import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './style.css'


const ProductCard = (props)=>{
  const {cardData} = props
  const navigate = useNavigate();
  const handleClick =(productId)=>{
    navigate('/details',{state:productId})
  }
  return(
    <>
    <div class="card">
  <img src={cardData.media.standard[0]} alt={cardData.brandName} style={{width:"100%"}}/>
  <h1>{cardData.name}</h1>
  <p class="price">{cardData.price}</p>
  <p class="details" onClick={()=>handleClick(cardData.product)}>View Details</p>
  <p><button>BUY NOW</button></p>
</div>
</>
  )

}


function ProductList() {
  const [data,setData] = useState(null)

  useEffect(()=>{

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {}
  };
  fetch('https://swati.centraqa.com/api/checkout/products/', requestOptions)
      .then(response => response.json())
      .then(result => {

        setData(result.products)
      });

  },[])

  if(!data) return <div>Loading.....</div>


  return (

    <div className="productlist">
      {
        data.slice(0,4).map(x=>{
          return <ProductCard cardData={x}/>
        })
      }

    </div>
  );
}

export default ProductList;
