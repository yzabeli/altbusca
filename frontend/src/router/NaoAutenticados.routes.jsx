import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from '../inicio';
import Header from '../components/header/naoAutenticado/Header';

import CadCliente from '../components/cadastro/cliente/CadCliente';
import Login from '../components/login/Login';
import Sobre from '../sobreNos/SobreNos';
import Manutencao from '../manutencao/index';

// Rota não autenticada
import CadProdutos from '../components/cadastro/produtos/CadProdutos'

export default function NaoAutenticados() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Inicio />} />

                <Route path='/cadastro' element={<CadCliente />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/manutencao' element={<Manutencao />} />

                <Route path='/cadastro-produtos' element={<CadProdutos />} />

                <Route path='*' element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    );
};