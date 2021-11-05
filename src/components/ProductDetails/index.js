import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import './style.css'




function ProductDetails() {
 const {state} = useLocation();

  const [data,setData] = useState(null)
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam iaculis volutpat. Aliquam molestie elementum orci bibendum aliquam. Suspendisse rutrum, quam in hendrerit ultricies, magna ipsum consectetur massa, vitae ullamcorper eros purus eget justo. Ut vestibulum nunc arcu, lacinia finibus metus viverra vitae. Phasellus porta elit non enim malesuada semper et a lectus. Integer placerat ullamcorper consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eleifend nibh ligula, ornare luctus est pulvinar nec. Etiam venenatis risus vehicula libero iaculis fermentum. Ut luctus nisi felis, nec lobortis lacus iaculis sit amet. Vivamus accumsan arcu nec placerat blandit. Etiam convallis ultricies enim in pretium. Maecenas facilisis iaculis tristique. Curabitur sed erat sit amet augue faucibus venenatis ac in felis. Praesent in lectus hendrerit, maximus tortor quis, feugiat mi"
  useEffect(()=>{

   const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {}
  };
  fetch(`https://swati.centraqa.com/api/checkout/products/${state}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(!result.product.description) result.product.description = description
        setData(result.product)
      });

  },[state])

  if(!data) return <div>Loading.....</div>


  return (

    <div className="productdetails">
          <div>
          <img src={data.media.full[0]} alt={data.brandName} style={{width:"100%"}}/>
          </div>
         
          <div className="details">
          <h1>{data.name}</h1>
  <p class="price">{data.price}</p>
  <p>{data.description}</p>
  <p><button>BUY NOW</button></p>
          </div>

    </div>
  );
}

export default ProductDetails;
