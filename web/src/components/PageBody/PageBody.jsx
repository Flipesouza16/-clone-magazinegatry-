import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../Card/Card';

import './PageBody.css';

export default PageBody => {
    return (
        <div className="page-body">
            <h2 className="page-body-titulo">Celulares e Smartphones</h2>
            <div className="page-body-produtos">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}