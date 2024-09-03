import React from 'react';
import ShopItem from './ShopItem';

const ListView = ({ items }) => (
    <div className="list-view">
        {items.map(item => (
            <ShopItem key={item.id} product={item} isListView={true} />
        ))}
    </div>
);

export default ListView;



  