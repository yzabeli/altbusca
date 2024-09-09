import React from 'react';

import Produtos from '../../components/produtos/Produtos';
import FaleConosco from '../../components/faleConosco/FaleConosco';

import '../../styles/index.css';

export default function Inicio() {
    return (
        <div>
            <Produtos />
            <FaleConosco />
        </div>
    );
};