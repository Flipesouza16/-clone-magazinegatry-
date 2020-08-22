import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import './Form.css';
import useApi from '../../components/Utils/useApi';

const initialValues = {
    title: '',
    imageUrl: '',
    price: '',
    type: ''
}

export default ({ id }) => {
    const [values, setValues] = useState(id ? null : initialValues);
    const history = useHistory();
    let errorCadastro = false;
    const [load, loadingInfo] = useApi({
        url: `/itens/${id}`,
        method: 'get',
        onCompleted: (response) => {
            setValues(response.data);
        }
    })

    const [save, saveInfo] = useApi({
        url: id ? `/itens/${id}` : `/itens`,
        method: id ? 'put' : 'post',
        onCompleted: (response) => {
            if(!response.error) {
                history.push('/')
            }
        }
    })

    useEffect(() => {
        if (id) {
            load();
        }
    }, [id]);

    function onChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    function onSubmit(e) {
        e.preventDefault();

       save({
           data: values
       })
    }

    function onDelete(e) {
        e.preventDefault();

        axios.delete(`http://localhost:5000/itens/${id}`)
            .then(response => {
                history.push('/');
            })
    }

    return (
        <div className="form">
            <header className="page-header">
                <Link to="/"><FontAwesomeIcon className="icon" icon="long-arrow-alt-left" /></Link>
                <h2 className="page-header-logo">Logo-Teste</h2>
            </header>

            <div className="page-form">
                <h1>{id ? 'Atualizar Produto' : 'Cadastrar um novo produto'}</h1>
                {!values
                    ? <div>Carregando...</div>
                    : <>
                        <form onSubmit={onSubmit}>
                            {saveInfo.loading && <span>Salvando dados...</span>}
                            <label htmlFor="title">Título</label>
                            <input
                                name="title"
                                type="text"
                                value={values.title}
                                placeholder="Digite o título/descrição"
                                onChange={onChange}
                                required
                            />
                            <label
                                htmlFor="image">
                                Imagem do Produto
                        </label>
                            <input
                                name="imageUrl"
                                type="text"
                                value={values.imageUrl}
                                placeholder="http://..."
                                onChange={onChange}
                                required />
                            <div className="form-info">
                                <label
                                    htmlFor="price">
                                    Preço
                            </label>
                                <input
                                    name="price"
                                    type="number"
                                    value={values.price}
                                    placeholder="Digite o valor do produto"
                                    onChange={onChange}
                                    required
                                />
                                <label
                                    htmlFor="type">
                                    Tipo do produto
                            </label>
                                <select
                                    name="type"
                                    value={values.type}
                                    required
                                    onChange={onChange}
                                >
                                    >
                                <option hidden value="">
                                        Escolha uma opção
                                </option>
                                    <option
                                        name="type"
                                        value="celulares"
                                    >
                                        Celular/Smartphone
                                </option>
                                    <option
                                        name="type"
                                        value="livros"
                                    >
                                        Livro
                                </option>
                                    <option
                                        name="type"
                                        value="games"
                                    >
                                        Game
                                </option>
                                </select>
                            </div>
                            <button>{id ? 'Atualizar' : 'Cadastrar'}</button>
                        </form>
                        <form onSubmit={onDelete}>
                            {id && <button className="button-excluir">
                                Excluir
                     </button>}
                        </form>
                    </>
                }
            </div>
        </div>
    )
}