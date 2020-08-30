import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './SearchProducts.css';
import List from '../List/List';
import PageMenu from '../PageMenu/PageMenu';
import useApi from '../Utils/useApi';

export default ({ titulo }) => {
    const mountRef = useRef(null);
    const path = window.location.pathname.replace('/', '');
    const [search, setSearch] = useState('');
    // const [products, setProducts] = useState([]);

    // using my own hooks to request the backend
    const [load, loadInfo] = useApi({
        debounceDelay: 300,
        url: `/products`,
        method: 'get',
        params: {
            title_like: search || undefined // parameter using to facilitate searches
        }
    })

    useEffect(() => {
        load({
            debounced: mountRef.current,
        });

        if (!mountRef.current) {
            mountRef.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (
        <div>
            <header className="page-header">
                <div className="page-header-main">
                    <h2 className="page-header-logo">Logo-Teste</h2>
                    <div className="page-header-input">
                        <input
                            placeholder="Buscar por um produto" type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button><FontAwesomeIcon icon="search" /></button>
                    </div>
                    <div className="button-cadastro">
                        <Link className="page-header-button-cadastro" to='/form'>Cadastrar Novo Produto</Link>
                    </div>
                </div>
                <div className="page-header-menu">
                    <PageMenu />
                </div>
            </header>


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