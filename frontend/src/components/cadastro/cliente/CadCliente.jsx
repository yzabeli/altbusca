import React from "react";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { IoMdArrowRoundBack } from "react-icons/io";

import './CadCliente.css';

export default function CadCliente() {

    const { register, handleSubmit, setValue, setFocus, reset } = useForm();

    const onSubmit = (e) => {
        console.log(e);
        reset();
    };

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, "");
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                setValue('address', data.logradouro);
                setValue('neighborhood', data.bairro);
                setValue('city', data.localidade);
                setValue('uf', data.uf);
                setFocus("addressNumber");
            });
    };

    return (
        <div className="cont">
            <section className="cadastro container">
                <div>
                    <h2 className="text-center">Cadastro</h2>
                </div>
                <div className="container">
                    <form className="form__client" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            autoFocus
                            type="text"
                            {...register("name")}
                            placeholder="Seu nome"
                        />
                        <InputMask
                            mask="99.999.999/9999-99"
                            type="text"
                            {...register("cnpj")}
                            placeholder="Seu CNPJ"
                        />
                        <input
                            type="text"
                            {...register("store")}
                            placeholder="Nome da loja"
                        />
                        <InputMask
                            mask="(99) 99999-9999"
                            type="tel"
                            {...register("tel")}
                            placeholder="Seu telefone"
                        />
                        <input
                            type="email"
                            {...register("email")}
                            placeholder="Seu e-mail"
                        />
                        <InputMask
                            mask="99999-999"
                            type="text"
                            {...register("cep")}
                            placeholder="Seu CEP"
                            onBlur={checkCEP}
                        />
                        <input
                            type="text"
                            {...register("address")}
                            placeholder="Sua Rua"
                        />
                        <input
                            type="number"
                            {...register("addressNumber")}
                            placeholder="Número da residencia"
                        />
                        <input
                            type="text"
                            {...register("neighborhood")}
                            placeholder="Seu bairro"
                        />
                        <input
                            type="text"
                            {...register("city")}
                            placeholder="Sua Cidade"
                        />
                        <InputMask
                            mask="aa"
                            type="text"
                            {...register("uf")}
                            placeholder="Seu UF(estado)"
                        />
                        <button className="btn__cadCliente" type="submit">Enviar</button>
                    </form>
                </div>
                <a href="/"><IoMdArrowRoundBack /></a>
            </section>
        </div>
    );
};