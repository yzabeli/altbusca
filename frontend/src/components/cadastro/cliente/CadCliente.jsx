import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiLocal from '../../../Api/apiLocal'
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";

import './CadCliente.css';

export default function CadCliente() {
    const mudarTela = useNavigate();
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [password, setPassword] = useState('');
    const [dadosViaCep, setDadosViaCep] = useState('');

    async function cadastroUsuarios(e) {
        try {
            e.preventDefault();
            if (!nome || !email || !password) {
                alert("Campos em Branco");
                return;
            };
            await apiLocal.post('/CadastrarUsuarios', {
                nome,
                email,
                cep,
                rua,
                numero,
                cidade,
                uf,
                password
            });
            toast.success('Cadastro Efetuado Com Sucesso', {
                toastId: 'ToastId'
            });
            mudarTela('/login');
        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            });
        };
    };

    const handleCepBlur = async () => {
        if (cep.length === 8) {
            try {
                const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
                setDadosViaCep({
                    rua: resposta.data.logradouro,
                    bairro: resposta.data.bairro,
                    cidade: resposta.data.localidade,
                    uf: resposta.data.uf,
                });
                console.log(resposta);
            } catch (error) {
                console.log('Erro ao buscar o CEP', error);
            };
        };
    };

    useEffect(() => {
        async function mostrarCep() {
            setRua(dadosViaCep.rua);
            setBairro(dadosViaCep.bairro);
            setCidade(dadosViaCep.cidade);
            setUf(dadosViaCep.uf);
        };
        mostrarCep();
    }, [dadosViaCep]);

    return (
        <div className="cont">
            <section className="cadastro container">
                <div>
                    <h2 className="text-center">Cadastro</h2>
                </div>
                <div className="container">
                    <form className="form__client" onSubmit={cadastroUsuarios}>
                        <input
                            autoFocus
                            type="text"
                            placeholder="nome da loja"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="CNPJ"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                        />
                        <input
                            type="tel"
                            placeholder="Telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="CEP"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            onBlur={handleCepBlur}
                        />
                        <input
                            type="text"
                            placeholder="Rua"
                            value={rua}
                            onChange={(e) => setRua(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Número da residencia"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Bairro"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="UF (estado)"
                            value={uf}
                            onChange={(e) => setUf(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="btn__cadCliente" type="submit">Enviar</button>
                    </form>
                </div>
                <a href="/"><IoMdArrowRoundBack /></a>
            </section>
        </div>
    );
};