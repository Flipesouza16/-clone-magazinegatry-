import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './PageMenu.css';

export default PageMenu => {
    return (
        <div className="page-menu">
            <ul className="page-menu-list">
                <li>Celulares e Smartphones</li>
                <li>Livros</li>
                <li>Games</li>
                <li>Loading...</li>
                <li>Loading...</li>
            </ul>
        </div>
    )
}