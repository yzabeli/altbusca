import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

import './Login.css';

const Login = () => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!usuario || !senha) {
            alert('Campos em Branco');
            return;
        }

        if (usuario === 'login@gmail.com' && senha === '666') {
            alert('Login efetuado com sucesso');
        } else {
            alert('Usuario/Senha incorretos');
            return;
        };
    }

    return (
        <div className='cont'>
            <section className="login">
                <form onSubmit={handleSubmit}>
                    <h2>Acesse o Sistema</h2>
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder='E-mail'
                            required
                            onChange={(e) => setUsuario(e.target.value)} />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder='Senha'
                            required
                            onChange={(e) => setSenha(e.target.value)} />
                        <FaLock className="icon" />
                    </div>
                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                        <a href="/manutencao">Esqueceu a senha?</a>
                    </div>
                    <button>Entrar</button>
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