import React from 'react';

import './Card.css';
import { Link } from 'react-router-dom';

export default ({ product }) => {
    // var shell = new ActiveXObject("WScript.Shell");

    function openUrl() {
        window.open(product.url)
    }

    return (
        <div className="components-card">
            <Link className="button-link" to={`/products/${product._id}`}>
                <img className="components-card-image" src={product.imageUrl} alt={product.tite} />
            </Link>

            <div className="components-card-info">
                <h1 className="components-card-title">
                    {product.title}
                </h1>
                <span className="components-card-price">
                    R$ {product.price}
                </span>
                <button className="button-url" onClick={openUrl}>Verificar Produto</button>
            </div>
        </div>
    )
}