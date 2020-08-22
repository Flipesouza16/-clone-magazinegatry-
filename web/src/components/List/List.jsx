import React from 'react';
import Card from '../Card/Card';

import './List.css';

export default ({ products, error, loading }) => {
    let path = window.location.pathname.replace('/', '');

    if(path === '') {
        path = 'celulares';
    }

    if(error) {
        return <div>Algo de errado não está certo</div>
    }

    if(loading || products === null) {
        return <div>Carregando...</div>
    }

    if(products.length === 0) {
        return <div>Nenhum resultado encontrado</div>
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