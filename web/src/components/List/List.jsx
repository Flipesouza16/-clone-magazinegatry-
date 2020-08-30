import React from 'react';
import Card from '../Card/Card';

import './List.css';

export default ({ products, error, loading }) => {
    let path = window.location.pathname.replace('/', '');
    
    if(path === '') {
        path = 'celulares';
    }

    if(error) {
        return <div className="warning">Algo de errado não está certo</div>
    }

    if(loading || products === null) {
        return <div className="warning">Carregando...</div>
    }

    if(products.length === 0) {
        return <div className="warning">Nenhum resultado encontrado</div>
    }

    return (
        <div  className="page-body-produtos">
            {products
                .filter(product => {
                    return product.type === path;
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