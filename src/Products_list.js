import React from 'react'
import Product from "./../src/Product"
export default function Products_list() {
   let Product=[
    {
      name:"suzuki",
       price:"120000" ,
       url:"https://media.zigcdn.com/media/model/2023/Jun/hero-passion-plus-right-side-view_360x240.jpg"
    },
    {
      name:"hero" ,price:"180000" ,
      url:"https://media.zigcdn.com/media/model/2023/Jun/hero-passion-plus-right-side-view_360x240.jpg"
    },
    {name:"splender" ,price:"180000" ,
    url:"https://media.zigcdn.com/media/model/2023/Feb/hero-splendor-plus-right-side-view_360x240.jpg"}
   ]
  return (
    <>
    <div>Products_list</div>
    <div >
    {/* <Product name="suzuki" price="120000" url="https://media.zigcdn.com/media/model/2023/Jun/hero-passion-plus-right-side-view_360x240.jpg"/>
    <Product name="hero" price="180000" url="https://media.zigcdn.com/media/model/2023/Jun/hero-passion-plus-right-side-view_360x240.jpg"/><br/>
    <Product name="splender" price="180000" url="https://media.zigcdn.com/media/model/2023/Feb/hero-splendor-plus-right-side-view_360x240.jpg"/><br/> */}
    {
     Product.map((pro)=>(
<div className="Product" >
   <img src={pro.url}/>
  <ul  >
  <h1>{pro.name}</h1>
  <p>{pro.price}</p>
  
  </ul>
  
</div>


     )) 
    }
    </div>
    </>
  )
}
