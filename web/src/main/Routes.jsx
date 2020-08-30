import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Form from '../components/Form/Form';

export default Routes => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/celulares" exact component={Landing} />
                <Route path="/livros" exact component={Landing} />
                <Route path="/games" exact component={Landing} />
                <Route path="/form" exact component={Form} />
                <Route path="/products/:id" exact component={Form} />
            </Switch>
        </BrowserRouter>
    )
}