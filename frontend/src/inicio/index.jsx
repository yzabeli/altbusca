import React, { useContext } from 'react';
import { AutenticadoContexto } from '../Contexts/authContexts';
import Produtos from '../components/produtos/Produtos';
import FaleConosco from '../components/faleConosco/FaleConosco';

import '../styles/index.css';

export default function Inicio() {
    const { verificarToken } = useContext(AutenticadoContexto);
    verificarToken();

    return (
        <div>
            <Produtos />
            <FaleConosco />
        </div>
    );
};