import React, { useState, useMemo } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Person } from 'react-bootstrap-icons';

import { todos } from '../../../assets/assets';
import '../Header.css';

export default function Header() {
    const [busca, setBusca] = useState('');

    const filtrados = useMemo(() => {
        const lowerBusca = busca.toLocaleLowerCase();
        return todos.filter((item) =>
            item.nome.toLocaleLowerCase().includes(lowerBusca));
    }, [busca]);

    return (
        <Navbar expand="lg" sticky="top" className="p-3" id="cabecalho">
            <Container className='d-lg-flex d-md-block d-sm-block'>
                <div className="logo__principal">
                    <Navbar.Brand href='/' className="m-0 section-title">Alt Busca&#128375;</Navbar.Brand>
                </div>
                <div className="area__buscar">
                    <div className="input__busca">
                        <InputGroup>
                            <Form.Control
                                placeholder="Digite sua busca..."
                                aria-label="Busca"
                                aria-describedby="basic-addon1"
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                            />
                        </InputGroup>
                    </div>
                    {busca && (
                        <ul id='listaProds'>
                            {filtrados.map((item, index) => (
                                <li key={index}>
                                    <a href="/">{item.nome}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="menu__navbar">
                    <Nav>
                        <Nav.Link href="/cadastro-produtos" className="fw-bold me-2">
                            <Person className='me-2' />
                            Cadastrar Produto
                        </Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
};