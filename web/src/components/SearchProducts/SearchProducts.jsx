import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './SearchProducts.css';
import List from '../List/List';
import PageMenu from '../PageMenu/PageMenu';
import useApi from '../Utils/useApi';

export default ({ titulo }) => {
    const path = window.location.pathname.replace('/', '');

    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);

    const [load, loadInfo] = useApi({
        url: '/itens',
        method: 'get',
        params: {
            title_like: search || undefined
        }
    })

    useEffect(() => {
       load();
    }, [search]);

    return (
        <div>
            <header className="page-header">
                <h2 className="page-header-logo">Logo-Teste</h2>
                <div className="page-header-input">
                    <input
                        placeholder="Buscar por um produto" type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button><FontAwesomeIcon icon="search" /></button>

                </div>
                <div>
                    <Link className="page-header-button-cadastro" to='/form'>Cadastrar Novo Produto</Link>
                </div>
            </header>

            <PageMenu />

            <div className="page-body">

                <h2 className="page-body-titulo">{titulo[path] === undefined ? 'Celulares e Smartphones' : titulo[path]}</h2>
                <div>
                    <List 
                        products={loadInfo.data}
                        loading={loadInfo.loading}
                        error={loadInfo.error}    
                    />
                </div>
            </div>
        </div>
    )
}