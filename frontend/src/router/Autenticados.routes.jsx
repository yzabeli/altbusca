import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '../dashboard/inicio/index';
import Header from '../components/header/autenticado/Header';

import CadProdutos from '../components/cadastro/produtos/CadProdutos'
import Manutencao from '../manutencao/index';
import Sobre from '../sobreNos/SobreNos';

export default function NaoAutenticados() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Dashboard />} />

                <Route path='/cadastro-produtos' element={<CadProdutos />} />
                <Route path='/manutencao' element={<Manutencao />} />
                <Route path='/sobre' element={<Sobre />} />

                <Route path='*' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};