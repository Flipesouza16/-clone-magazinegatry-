import React from 'react';

import './Form.css';

export default Form => {
    return (
        <div className="page-form">
            <h1>Cadastrar um novo produto</h1>
            <form action="">
                <div>
                    <label htmlFor="">Título</label>
                    <input name="" type="text" placeholder="Digite o título/descrição" />
                    <label htmlFor="">Imagem do Produto</label>
                    <input name="" type="text" placeholder="http://..." />
                    <label htmlFor="">Preço</label>
                    <input name="" type="number" placeholder="Digite o valor do produto" />
                    <label htmlFor="">Tipo do produto</label>
                    <select name="" id="">
                        <option hidden>Escolha uma opção</option>
                        <option value="celulares">Celulares/Smartphones</option>
                        <option value="livros">Livros</option>
                        <option value="games">Games</option>
                    </select>
                </div>
            </form>
        </div>
    )
}