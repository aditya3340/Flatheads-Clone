import React from 'react'
import Carousel from './Carousel';




const CurrentProduct = ({product}) => {
    const { id, name, color, gender, original_price, final_price, images } =
    product;
  return (
    <div >
        <Carousel >
            <img src= {images[0]} alt = "placeholder"/>
            <img src= {images[1]} alt = "placeholder"/>
            <img src= {images[2]} alt = "placeholder"/>
        </Carousel>
       
    </div>
  )
}

export default CurrentProduct