import React from 'react';

const ShopCard = ({ product }) => (
    <div className="shop-card">
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="color">{product.color}</p>
        <p className="price">${product.price}</p>
    </div>
);

export default ShopCard;

  