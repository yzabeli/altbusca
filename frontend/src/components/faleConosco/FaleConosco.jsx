import React from 'react';

import './FaleConosco.css';

export default function FaleConosco() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h2>Categorias</h2>
                            <ul>
                                <li>
                                    <a href="/manutencao">
                                        Vestidos
                                    </a>
                                </li>
                                <li>
                                    <a href="/manutencao">
                                        Parte de Cima 
                                    </a>
                                </li>
                                <li>
                                    <a href="/manutencao">
                                        Acessórios
                                    </a>
                                </li>
                                <li>
                                    <a href="/manutencao">
                                        Calçados
                                    </a>
                                </li>
                                <li>
                                    <a href="/manutencao">
                                        Parte de Baixo
                                    </a>
                                </li>
                                <li>
                                    <a href="/manutencao">
                                        Meias
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm">
                            <h2>Empresa info</h2>
                            <ul>
                                <li>
                                    <a href="/sobre">
                                        Sobre
                                    </a>
                                </li>
                                <li>
                                    <a href="/manutencao">
                                        Contatos
                                    </a>
                                </li>
                                <li>
                                    <a href="/manutencao">
                                        Trabalhe Conosco
                                    </a>
                                </li>
                                <li>
                                    <a href="/manutencao">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="/manutencao">
                                        Termos de serviços
                                    </a>
                                </li>
                                <li>
                                    <a href="/manutencao">
                                        Política de Privacidade
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm">
                            <h2>Ajuda</h2>
                            <ul>
                                <li>
                                    <a href="/manutencao">
                                        Suporte a Conta
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="copy">
                        <p>&copy; 2024 AltBusca. Todos os direitos reservados. </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};