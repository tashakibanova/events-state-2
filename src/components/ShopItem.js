// ShopItem.js
import React from 'react';

const ShopItem = ({ product }) => (
    <div className="shop-item">
        <img src={product.img} alt={product.name} />
        <div className="shop-item-details">
            <h3>{product.name}</h3>
            <p className="color">{product.color}</p>
            <p className="price">${product.price}</p>
        </div>
    </div>
);

export default ShopItem;







  