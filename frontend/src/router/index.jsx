import React, { useContext } from "react";

import NaoAutenticados from './NaoAutenticados.routes';
import Autenticados from './Autenticados.routes';

import { AutenticadoContexto } from "../Contexts/authContexts";

export default function Rotas() {
    const {autenticado} = useContext(AutenticadoContexto);
    // const autenticado = false;

    return (
        <>
            {autenticado === true ? <Autenticados /> : <NaoAutenticados />}
        </>
    )
}