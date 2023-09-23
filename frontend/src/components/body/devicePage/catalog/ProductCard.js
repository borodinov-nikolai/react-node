import React from "react"



function ProductCard({id, name, price, img}) {
 
    return (
    
      <div className="product-card" data-id={id}>
        <img src={'http://localhost:4000/' + img} alt="" className="product-img" />
        <p className="description">{name}</p>
        <div className="product-card-cont">
          <div className="counter-wrapper">
            <button className="left">-</button>
            <div className="counter">1</div>
            <button className="right">+</button>
          </div>
          <div className="price">{price}₽</div>
        </div>
        <button className="incart">
          + в корзину
        </button>
      </div>
      
    )

}

export default ProductCard;
