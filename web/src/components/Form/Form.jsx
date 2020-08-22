import React from 'react';
import Form from '../../pages/Form/Form';
import { useParams } from 'react-router-dom';

export default props => {
    const { id } = useParams();

    return (
        <Form id={id} />
    )
}