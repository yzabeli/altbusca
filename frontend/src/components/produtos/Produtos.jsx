import React, { useState } from "react";
import { Container, Row, Col, Tab, Card, Button, Dropdown } from 'react-bootstrap';
import { todos } from "../../assets/assets";
import Categorias from '../categorias/Categorias';
import './Produtos.css';

export default function Produtos() {
    const [activeKey, setActiveKey] = useState('todos');
    const [selectedLoja, setSelectedLoja] = useState('');

    const filteredProducts = () => {
        const products = activeKey === 'todos' 
            ? todos 
            : todos.filter(item => item.categ === activeKey);

        return selectedLoja ? products.filter(item => item.loja === selectedLoja) : products;
    };

    return (
        <section id="produtos" className="pt-5 pb-5">
            <Container>
                <Categorias categoria={activeKey} setCategoria={setActiveKey} />

                <Dropdown onSelect={(loja) => setSelectedLoja(loja)}>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        {selectedLoja || "Selecione a Loja"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="">Todas as Lojas</Dropdown.Item>
                        <Dropdown.Item eventKey="Amazon">Amazon</Dropdown.Item>
                        <Dropdown.Item eventKey="Shopee">Shopee</Dropdown.Item>
                        <Dropdown.Item eventKey="Estreet">Estreet</Dropdown.Item>
                        <Dropdown.Item eventKey="Bee Fancy">Bee Fancy</Dropdown.Item>
                        <Dropdown.Item eventKey="AliExpress">AliExpress</Dropdown.Item>
                        <Dropdown.Item eventKey="Mercado Livre">Mercado Livre</Dropdown.Item>
                        <Dropdown.Item eventKey="Queen of Bones">Queen of Bones</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                    <Row>
                        <Tab.Content>
                            <Tab.Pane
                                eventKey={activeKey}
                                className=""
                                id={activeKey}
                            >
                                <Row>
                                    {filteredProducts().map((item, index) => (
                                        <Col lg={3} md={4} sm={6} key={index}>
                                            <Card className="image mt-3">
                                                <Card.Img src={item.imagem} alt="Demonstração de roupa da loja" />
                                                <Card.Body>
                                                    <Card.Title>{item.nome}</Card.Title>
                                                    <Card.Text>{item.preco}</Card.Text>
                                                    <Button variant="dark" target="blank" href={item.link}>
                                                        Ir para o site da loja
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    );
};