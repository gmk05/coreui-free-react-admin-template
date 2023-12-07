import React from 'react'

export default function Product(props) {
  return (
    <>
    <div className="Products" >
    <img src={props.url}/>
    <h2>{props.name}</h2>
     <div><p> {props.price}</p></div>
  <div> 
  <button> select</button></div>
      
    </div>
     
    </>
  )
}
