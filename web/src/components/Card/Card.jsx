import React from 'react';

import './Card.css';

export default Card => {
    return (
        <div className="components-card">
            <img className="components-card-image" src="https://a-static.mlcdn.com.br/160x160/smartphone-motorola-g8-plus-64gb-azul-safira-4g-4gb-ram-tela-63-cam-tripla-cam-selfie-25mp/magazineluiza/155567800/8ca6dc89844ee3abc39ab3bf7fb8a879.jpg" alt="celular" />

            <div className="components-card-info">
                <h1 className="components-card-title">
                    Smartphone Motorola G8 Plus 64GB Azul Safira 4G - 4GB RAM Tela 6,3” Câm. Tripla + Câm. Selfie 25MP
                </h1>
                <span className="components-card-price">
                    R$ 1.487,07
                </span>
            </div>
        </div>
    )
}