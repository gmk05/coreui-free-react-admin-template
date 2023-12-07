import React from 'react'
import Product from "./../src/Product"
export default function Products_list() {
  return (
    <>
    <div>Products_list</div>
    <div className="Product">
    <Product name="suzuki" price="120000" url="https://media.zigcdn.com/media/model/2023/Jun/hero-passion-plus-right-side-view_360x240.jpg"/>
    <Product name="hero" price="180000" url="https://media.zigcdn.com/media/model/2023/Jun/hero-passion-plus-right-side-view_360x240.jpg"/><br/>
    <Product name="splender" price="180000" url="https://media.zigcdn.com/media/model/2023/Feb/hero-splendor-plus-right-side-view_360x240.jpg"/><br/>
    </div>
    </>
  )
}
