import React, { useContext, useEffect, useState } from "react";
import { AutenticadoContexto } from '../../../Contexts/authContexts'
import { useNavigate, Link } from 'react-router-dom';
import { toast } from "react-toastify";
import apiLocal from "../../../Api/apiLocal";

import { IoMdArrowRoundBack } from "react-icons/io";

import "./CadProdutos.css";

export default function CadProdutos() {
    const { verificarToken } = useContext(AutenticadoContexto);
    verificarToken();

    const mudarTela = useNavigate();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [grupos, setGrupos] = useState(['']);
    const [idGrupos, setIdGrupos] = useState('');

    useEffect(() => {
        async function listarGrupos() {
            const resposta = await apiLocal.get('/ListarGrupos');
            setGrupos(resposta.data);
        };
        listarGrupos();
    }, []);

    async function onSubmit(e) {
        try {
            e.preventDefault();
            if (!nome || !descricao || !preco) {
                alert("Campos em Branco");
                return;
            };
            await apiLocal.post('/CadastrarUsuarios', {
                nome,
                descricao,
                preco,
                idGrupos
            });
            toast.success('Cadastro Efetuado Com Sucesso', {
                toastId: 'ToastId'
            });
            mudarTela('/');

        } catch (err) {
            console.log(err.response.data);
            // toast.error('Erro ao Comunicar com BackEnd', {
            //     toastId: 'ToastId'
            // });
        };
    };

    return (
        <div className="cont">
            <section className="produtos">
                <h1>Cadastro de Produtos</h1>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder='Nome do produto'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Descrição do produto'
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Preço do produto'
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                    <select
                        value={idGrupos}
                        onChange={(e) => setIdGrupos(e.target.value)}
                    >
                        <option>Selecione o Grupo...</option>
                        {grupos.map((item) => {
                            return (
                                <option value={item.id}>{item.nome}</option>
                            )
                        })}
                    </select>
                    <button type='submit'>Enviar</button>
                </form>
                <Link to='/' className='buttonVoltar' >Voltar Inicio</Link>
                <a href="/"><IoMdArrowRoundBack /></a>
            </section>
        </div>
    );
};
