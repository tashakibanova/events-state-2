// CardsView.js
import React from 'react';
import ShopItem from './ShopItem';

const CardsView = ({ items }) => (
    <div className="cards-container">
        {items.map(item => (
            <div className="shop-card" key={item.name}>
                <ShopItem product={item} />
            </div>
        ))}
    </div>
);

export default CardsView;





  