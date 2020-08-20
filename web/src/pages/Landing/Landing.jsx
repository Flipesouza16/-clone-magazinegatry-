import React from 'react';
import './Landing.css';

import SearchProducts from '../../components/SearchProducts/SearchProducts';

const titulo = {
    celulares: 'Celulares e Smartphones',
    livros: 'Livros',
    games: 'Games'
}

export default ({Landing}) => {
    return (
        <div className="landing">
            <SearchProducts titulo={titulo} />
        </div>
    )
}