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
    // hooks useState to store form values, starting with initial values ​​("initialValues") if the id is false, otherwise starting with null

    const [values, setValues] = useState(id ? null : initialValues);
    // route history
    const history = useHistory();
    // using my own hooks to request the backend
    const [load, loadingInfo] = useApi({
        url: `/itens/${id}`,
        method: 'get',
        onCompleted: (response) => {  // hooks function useApi to pass request values ​​to const "values"
            setValues(response.data);
        }
    })

    const [save, saveInfo] = useApi({ //hooks useApi
        url: id ? `/itens/${id}` : `/itens`, // Checking if the id is true to use the url to put method, otherwise post
        method: id ? 'put' : 'post', // Checking method
        onCompleted: (response) => {    // Function to return to the initial route if no error occurred
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
        const { name, value } = e.target; // taking the target's "name" and "value" values
        setValues({ ...values, [name]: value }); // assigned a copy of "values" along with "name" and "value" to const values
    }

    function onSubmit(e) {
        e.preventDefault();

       save({ // using the save function and passing the form values ​​to the backend
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
                {!values     // if the values ​​are false, displays the message "Carregando"
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