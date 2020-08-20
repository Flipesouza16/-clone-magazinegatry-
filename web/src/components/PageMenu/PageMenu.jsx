import React from 'react';
import { Link } from 'react-router-dom';

import './PageMenu.css';

export default PageMenu => {
    return (
        <div className="page-menu">
            <div className="page-menu-list">
                <Link className="link" to="/celulares">Celulares e Smartphones</Link>
                <Link className="link" to="/livros">Livros</Link>
                <Link className="link" to="/games">Games</Link>
                <Link className="link" to="/">filler</Link>
                <Link className="link" to="/">filler</Link>
            </div>
        </div>
    )
}