import React from 'react';
import './Landing.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '../../components/Card/Card';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageMenu from '../../components/PageMenu/PageMenu';
import PageBody from '../../components/PageBody/PageBody';

export default Landing => {
    return (
        <div className="landing">
                <PageHeader />    
                <PageMenu />
                <PageBody />
        </div>
    )
}