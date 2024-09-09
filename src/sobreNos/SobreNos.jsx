import React from "react"
import { IoMdArrowRoundBack } from "react-icons/io";

import './SobreNos.css';

export default function SobreNos() {
    return (
        <div className="cont">
            <div className="login">
                <h1>Sobre Nós</h1>
                <p>
                    Bem-vindo ao Alt Busca, Sabemos que o estilo alternativo vai além das tendências convencionais e expressa a sua individualidade. Por isso, criamos uma plataforma para ajudar você a descobrir peças únicas e autênticas. Nosso site reúne uma vasta seleção de lojas, para garantir que você sempre encontre as melhores ofertas. Nossa missão é facilitar a sua busca pelo estilo perfeito, oferecendo uma experiência de compra informada e acessível. Estamos sempre atentos ás novidades e ás tendências do universo alternativo, para que você possa explorar novas marcas, descobrir produtos exclusivos e se manter fiel ao seu estilo sem estourar o orçamento.
                </p>
                <a href="/"><IoMdArrowRoundBack /></a>
            </div>
        </div>
    )
}