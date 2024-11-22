import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Nav, Tab, Form, Button } from "react-bootstrap";
import { FaRegImage } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";

import "./CadProdutos.css";

export default function CadProdutos() {
    const [activeKey, setActiveKey] = useState('aba1');
    const [products, setProducts] = useState([]);
    const [imageURL, setImageURL] = useState();
    const { register, handleSubmit, reset } = useForm();
    const imgRef = useRef(null);

    const onSubmit = (data) => {
        const newProduct = {
            name: data.name,
            descr: data.descr,
            preco: data.preco,
            loja: data.loja,
            link: data.link,
            imageURL: imageURL
        };
        console.log(newProduct)
        setProducts([...products, newProduct]);
        reset();
        setImageURL();
        setActiveKey('aba2'); // Muda para a aba de produtos cadastrados
    };

    const handleImageClick = () => {
        imgRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageURL(url);
        };
    };

    return (
        <div className="cont">
            <section className="produtos">
                <Container>
                    <Row>
                        <h2>Cadastro</h2>
                    </Row>
                    <Row>
                        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                            <Col lg={2} md={12}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="aba1">Cadastro</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="aba2">Produtos Cadastrados</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col lg={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="aba1">
                                        <Container>
                                            <Form onSubmit={handleSubmit(onSubmit)} className="form__produtos">
                                                <Form.Group onClick={handleImageClick} id="input__img" className="mb-3">
                                                    {imageURL ? (
                                                        <img src={(imageURL)} alt="imagem selecionada" id="img__selecionada" />
                                                    ) : (
                                                        <FaRegImage id="img__input" />
                                                    )}
                                                    <Form.Control className="d-none"
                                                        type="file"
                                                        ref={imgRef}
                                                        accept="image/png, image/jpeg"
                                                        onChange={handleImageChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="text"
                                                        {...register("name")}
                                                        placeholder="Nome do produto"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="text"
                                                        {...register("descr")}
                                                        placeholder="Descrição do produto"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="number"
                                                        {...register("preco")}
                                                        placeholder="Preço do produto"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="text"
                                                        {...register("loja")}
                                                        placeholder="Nome da loja"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="text"
                                                        {...register("link")}
                                                        placeholder="Link do produto"
                                                    />
                                                </Form.Group>
                                                <Button className="btn__cadProdutos" type="submit">Enviar</Button>
                                            </Form>
                                        </Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="aba2" id="aba__2">
                                        <h3>Produtos cadastrados</h3>
                                        {products.length > 0 ? (
                                            products.map((product, index) => (
                                                <div key={index} className="product-item">
                                                    {product.imageURL && (
                                                        <div>
                                                            <img src={product.imageURL} alt="Produto" style={{ maxWidth: "300px", maxHeight: "300px" }} />
                                                        </div>
                                                    )}
                                                    <p><b>Nome:</b> {product.name}</p>
                                                    <p><b>Descrição:</b> {product.descr}</p>
                                                    <p><b>Preço:</b> {product.preco}</p>
                                                    <p><b>Loja:</b> {product.loja}</p>
                                                    <p><b>Link:</b> {product.link}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>Nenhum produto cadastrado</p>
                                        )}
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Tab.Container>
                    </Row>
                </Container>
                <a href="/"><IoMdArrowRoundBack /></a>
            </section>
        </div>
    );
};
