import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Person } from 'react-bootstrap-icons';

import '../Header.css';

export default function Header() {
    return (
        <Navbar expand="lg" sticky="top" className="p-3" id="cabecalho">
            <Container className='d-lg-flex d-md-block d-sm-block'>
                <div className="logo__principal">
                    <Navbar.Brand href='/' className="m-0 section-title">Alt Busca&#128375;</Navbar.Brand>
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