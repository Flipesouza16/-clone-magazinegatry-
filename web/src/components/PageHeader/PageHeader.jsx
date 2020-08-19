import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './PageHeader.css';

export default PageHeader => {
    return (
        <header className="page-header">
            <h2 className="page-header-logo">Logo-Teste</h2>
            <div className="page-header-input">
                <input placeholder="Buscar por um produto" type="text" />
                <button><FontAwesomeIcon icon="search" /></button>

            </div>
            <div className="page-header-button-cadastro">
                <button>Cadastrar Novo Produto</button>
            </div>
        </header>
    )
}