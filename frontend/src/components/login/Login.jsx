import React, { useContext, useState } from "react";
import { AutenticadoContexto } from "../../Contexts/authContexts";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import './Login.css';

const Login = () => {

    const { loginEntrada, verificarToken} = useContext(AutenticadoContexto);
    verificarToken();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nagivate = useNavigate()

    async function dadosLogin(e) {
        e.preventDefault()
        if (!email || !password) {
            toast.warning('Preencha todos os campos')
            return
        }
        try {
            await loginEntrada(email, password);
            nagivate("/");
        } catch (err) {

        }
    }

    return (
        <div className='cont'>
            <section className="login">
                <form onSubmit={dadosLogin}>
                    <h2>Acesse o Sistema</h2>
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder='E-mail'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder='Senha'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className="icon" />
                    </div>
                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                        <a href="/manutencao">Esqueceu a senha?</a>
                    </div>
                    <button type="submit">Entrar</button>
                    <div className="signup-link">
                        <p>
                            Não tem uma conta? <a href="/cadastro">Registrar</a>
                        </p>
                    </div>
                </form>
                <a href="/"><IoMdArrowRoundBack /></a>
            </section>
        </div>
    )
}

export default Login;