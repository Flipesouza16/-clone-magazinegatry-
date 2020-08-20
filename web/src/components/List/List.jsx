import React from 'react';
import Card from '../Card/Card';

import './List.css';

export default ({ products }) => {
    let path = window.location.pathname.replace('/', '');

    if(path === '') {
        path = 'celulares';
    }

    return (
        <div  className="page-body-produtos">
            {products
                .filter(product => {
                    return product.type === path
                }
                )
                .map(filteredProducts => {
                    return <Card key={filteredProducts.id} product={filteredProducts} />
                }
                )
            }
        </div>
    )
}