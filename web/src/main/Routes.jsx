import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';

export default Routes => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
        </BrowserRouter>
    )
}