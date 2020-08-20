import React from 'react';

import './Card.css';

export default ({ product }) => {
    return (
        <div className="components-card">
            <img className="components-card-image" src={product.imageUrl} alt={product.tite} />

            <div className="components-card-info">
                <h1 className="components-card-title">
                {product.title}
                </h1>
                <span className="components-card-price">
                    R$ {product.price}
                </span>
            </div>
        </div>
    )
}