// Importação das imagens
import menu_2 from "../imgs/corset1beefancy.png";
import menu_3 from "../imgs/acessorio.png";
import menu_5 from "../imgs/saia1.png";
import menu_6 from "../imgs/meiacalça.png";
import menu_7 from "../imgs/cintoAli.png"
import menu_8 from "../imgs/aquecedordepernaMC.png"
import menu_9 from "../imgs/cima1.png"
import menu_10 from "../imgs/saia2.png"
import menu_11 from "../imgs/cima2.png"
import menu_13 from "../imgs/bolsa.png"

//vestido

import menu_1 from "../imgs/vestidoaliexpress.png";
import ImgVestido1 from '../imgs/vestidoAli.png';
import ImgVestido2 from '../imgs/vestidoAli3.png';
import ImgVestido3 from "../imgs/vestidoEstreet.png";
import ImgVestido4 from "../imgs/vestidoAli2.png"
import ImgVestido5 from "../imgs/vestidoAma1.png"


//parte de cima
import ImgPC2 from '../imgs/blusabeefancy.png';
import ImgPC3 from '../imgs/lanadelrey.png';
import ImgPC from "../imgs/moletomS.png"
import ImgPC4 from '../imgs/nirvana.png';
import ImgPC5 from '../imgs/blusinha.png';
import ImgPC6 from '../imgs/helena.png';

//parte de baixo
import ImgPB from '../imgs/calça.png'
import ImgPB2 from '../imgs/saiamercadolivre.png';
import ImgPB3 from '../imgs/saia.png';
import ImgPB4 from '../imgs/saiamercadolivre2.png.png';
import ImgPB5 from '../imgs/saialaço.png'
import ImgPB6 from '../imgs/saiacruz.png'





//acessorio
import acessorio from "../imgs/acessorio3.png"
import acessorios2 from "../imgs/acessorio4.png"
import acessorios3 from "../imgs/acessorio5.png"
import acessorios4 from "../imgs/acessorio6.png"
import acessorios5 from "../imgs/acessorio7.png"

//meias
import meia from "../imgs/meia1.png"
import meia2 from "../imgs/meia2.png"
import meia3 from "../imgs/meia3.png"
import meia4 from "../imgs/meia4.png"
import meia5 from "../imgs/meia5.png"
import meia6 from "../imgs/meia6.png"

//sapato
import menu_4 from "../imgs/coturno1beefancy.png";
import menu_12 from  "../imgs/sapato.png"
import Imgsap3 from  "../imgs/coturno2est.png"
import Imgsap4 from "../imgs/plataforma.png"
import Imgsap5 from "../imgs/sapatoali.png"
import Imgsap6 from "../imgs/sapatoMC.png"
import Imgsap7 from "../imgs/sapMC.png"
import Imgsap8 from "../imgs/tenisBF.png"

// Conteudo da aba Categorias
export const categorias = [
    {
        menu_id: "todos",
        menu_name: "Todos",
        menu_image: menu_1,
    },
    {
        menu_id: "vestidos",
        menu_name: "Vestidos",
        menu_image: menu_1,
    },
    {
        menu_id: "cima",
        menu_name: "Parte de Cima",
        menu_image: menu_11,
    },
    {
        menu_id: "acessorios",
        menu_name: "Acessórios",
        menu_image: menu_3,
    },
    {
        menu_id: "calcados",
        menu_name: "Calçados",
        menu_image: menu_12,
    },
    {
        menu_id: "baixo",
        menu_name: "Parte de Baixo ",
        menu_image: menu_10,
    },
    {
        menu_id: "meias",
        menu_name: "Meias",
        menu_image: menu_6,
    },
];

// Conteudo da aba Todos em Categorias
export const todos = [
    {
        nome: "Vestido gótico Lolita Punk",
        preco: "R$135,64",
        descricao: "Tamanho: S M L XL 2XL, Fibra sintética",
        imagem: menu_1,
        loja: "Mercado Livre",
        link: "https://produto.mercadolivre.com.br/MLB-4589172554-vestido-lolita-vintage-gotico-feminino-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&attributes=COLOR_SECONDARY_COLOR%3AUHJldG8%3D%2CSIZE%3ARw%3D%3D",
        categ: "vestidos",
    },
    
    {
        nome: "CORSET BELLE",
        preco: "R$ 179,90",
        descricao: "",
        imagem: menu_2,
        loja: "Bee Fancy",
        link: "https://lojabeefancy.com.br/products/corset-belle?variant=44783483551908",
        categ: "cima",
    },

    {
        nome: "12 Peças De Colar",
        preco: "R$170,50",
        descricao: "Descrição do produto",
        imagem: menu_3,
        loja: "Mercado Livre",
        link: "https://produto.mercadolivre.com.br/MLB-4167119920-luyi-conjunto-de-12-pecas-de-colar-gotico-grunge-y2k-acesso-_JM",
        categ: "acessorios",
    },
    
    {
        nome: "BOTA DEMONIA SWING CLASSIC",
        preco: "R$ 389,90",
        descricao: "Descrição do produto",
        imagem: menu_4,
        loja: "Bee Fancy",
        link: "https://lojabeefancy.com.br/products/bota-demonia-classic-swing?variant=44783430008996",
        categ: "calcados",
    },
    
    {
        nome: "SAIA CLAIR",
        preco: "R$ 199,99",
        descricao: "Descrição do produto",
        imagem: menu_5,
        loja: "Bee Fancy",
        link: "https://lojabeefancy.com.br/products/saia-clair?variant=44783476506788",
        categ: "baixo",
    },
    
    {
        nome: "Meias estilo punk gótico",
        preco: "R$ 12,46",
        descricao: "Descrição do produto",
        imagem: menu_6,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/item/1005007439366219.html?spm=a2g0o.productlist.main.49.b7b7n60Jn60Jud&algo_pvid=22cd5bad-a99f-439f-90eb-73c7525d211c&algo_exp_id=22cd5bad-a99f-439f-90eb-73c7525d211c-24&pdp_npi=4%40dis%21BRL%2138.84%2112.43%21%21%2148.02%2115.37%21%402101e07217247790044772112e7be3%2112000040758445882%21sea%21BR%210%21ABX&curPageLogUid=3aWszErigprV&utparam-url=scene%3Asearch%7Cquery_from%3A",
        categ: "meias",
    },
    
    {
        nome: "Cinto estrela",
        preco: "R$ 45,00",
        descricao: "Descrição do produto",
        imagem: menu_7,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/i/1005002060801598.html",
        categ: "acessorios",
    },
    
    {
        nome: "Aquecedor de perna",
        preco: "R$ 33,70",
        descricao: "Descrição do produto",
        imagem: menu_8,
        loja: "Mercado Livre",
        link: "https://produto.mercadolivre.com.br/MLB-4800192446-meia-aquecedor-de-perna-kawaii-par-algodo-estoque-no-brasil-_JM?searchVariation=183214269573#position%3D9%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Da34c3d4b-14a3-48c3-9361-1f7e9ccb4038",
        categ: "meias",
    },
    
    {
        nome: "Cropped Bat",
        preco: "R$ 140,00",
        descricao: "Descrição do produto",
        imagem: menu_9,
        loja: "Queen of Bones",
        link: "https://queenofbones.com.br/produtos/cropped-bat-details/",
        categ: "cima",
    },
    
    {
        nome: "Saia de Laço",
        preco: "R$ 44,90",
        descricao: "Descrição do produto",
        imagem: menu_10,
        loja: "Estreet",
        link: "https://www.estreet.com.br/product-page/saia-de-la%C3%A7o",
        categ: "baixo",
    },
    
    {
        nome: "Sapato Mary Jane",
        preco: "R$ 99,98",
        descricao: "Descrição do produto",
        imagem: menu_12,
        loja: "Estreet",
        link: "https://www.estreet.com.br/product-page/sapato-mary-jane",
        categ: "calcados",
    },
    
    {
        nome: "Mini-bolsa Chain",
        preco: "R$ 44,93",
        descricao: "Descrição do produto",
        imagem: menu_13,
        loja: "Estreet",
        link: "https://www.estreet.com.br/product-page/mini-bolsa-chain",
        categ: "acessorios",
    },
    {
        nome: "Meia Arrastão",
        preco: "R$ 4,99",
        descricao: "Descrição do produto",
        imagem: meia,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/item/1005005623078366.html?spm=a2g0o.productlist.main.3.5f71JpT2JpT22V&algo_pvid=712610fb-6c9f-423e-81e8-55ce75a6b1b3&algo_exp_id=712610fb-6c9f-423e-81e8-55ce75a6b1b3-1&pdp_npi=4%40dis%21BRL%2112.11%214.99%21%21%212.10%210.86%21%402101e07217247795700814101e7bde%2112000033782451514%21sea%21BR%210%21ABX&curPageLogUid=8JbhZPGsvqLH&utparam-url=scene%3Asearch%7Cquery_from%3A",
        categ: "meias",
    },
    {
        nome: "Vestido gótico de renda feminino",
        preco: "R$ 66,90",
        descricao: "Descrição do produto",
        imagem: ImgVestido1,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/item/1005006990253510.html?spm=a2g0o.productlist.main.13.11df2344wpw4IU&algo_pvid=ffe972fd-41d6-4c30-82e2-3e8731b68706&algo_exp_id=ffe972fd-41d6-4c30-82e2-3e8731b68706-6&pdp_npi=4%40dis%21BRL%2189.20%2166.70%21%21%2115.47%2111.57%21%402101c67a17247796129106114e5a19%2112000038967735174%21sea%21BR%210%21ABX&curPageLogUid=bxLrEGbQ1Kj4&utparam-url=scene%3Asearch%7Cquery_from%3A",
        categ: "vestidos",
    },
    
    {
        nome: "InsGoth-Mini vestido gótico",
        preco: "R$ 159,90",
        descricao: "Descrição do produto",
        imagem: ImgVestido4,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/item/1005006643404323.html?src=google&src=google&albch=shopping&acnt=768-202-3196&isdl=y&slnk=&plac=&mtctp=&albbt=Google_7_shopping&aff_platform=google&aff_short_key=UneMJZVf&gclsrc=aw.ds&&albagn=888888&&ds_e_adid=&ds_e_matchtype=&ds_e_device=c&ds_e_network=x&ds_e_product_group_id=&ds_e_product_id=pt1005006643404323&ds_e_product_merchant_id=753968692&ds_e_product_country=BR&ds_e_product_language=pt&ds_e_product_channel=online&ds_e_product_store_id=&ds_url_v=2&albcp=19639392923&albag=&isSmbAutoCall=false&needSmbHouyi=false&gad_source=1&gclid=CjwKCAjw8rW2BhAgEiwAoRO5rCDg_UVzK6kPaV6_Ex9Z-7aUlQTOR-idCklicobGjq8qqSVTAGOmiBoCCIwQAvD_BwE",
        categ: "vestidos",
    },
    
    {
        nome: "Vestido Fary Longo",
        preco: "R$ 59,99",
        descricao: "Descrição do produto",
        imagem: ImgVestido3,
        loja: "Estreet",
        link: "https://www.estreet.com.br/product-page/vestido-fairy-longo",
        categ: "vestidos",
    },
    {
        nome: "Vestido gótico com cadarço",
        preco: "R$ 137.50",
        descricao: "Descrição do produto",
        imagem: ImgVestido2,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/item/1005007464245743.html?spm=a2g0o.productlist.main.41.63207dc8e9MSeV&algo_pvid=ab846148-62d3-40a4-b5c4-b4764d41cf87&algo_exp_id=ab846148-62d3-40a4-b5c4-b4764d41cf87-20&pdp_npi=4%40dis%21BRL%21166.98%2183.49%21%21%2128.96%2114.48%21%40210308a417247796678656732e3281%2112000040862234322%21sea%21BR%210%21ABX&curPageLogUid=amVbkl7609M6&utparam-url=scene%3Asearch%7Cquery_from%3A",
        categ: "vestidos",
    },
    {
        nome: "Jaqueta Skeleton",
        preco: "R$ 79,90",
        descricao: "Descrição do produto",
        imagem: ImgPC,
        loja: "Estreet",
        link: "https://www.estreet.com.br/product-page/jaqueta-skeleton",
        categ: "cima",
    },
    {
        nome: "CROPPED SOFT GOTHIC",
        preco: "R$ 129,90",
        descricao: "Descrição do produto",
        imagem: ImgPC2,
        loja: "bee fancy",
        link: "https://lojabeefancy.com.br/products/cropped-soft-gothic?variant=44783407693988",
        categ: "cima",
    },
    {
        nome: "CAMISA LANA DEL REY VINTAGE",
        preco: "R$ 149,90",
        descricao: "Descrição do produto",
        imagem: ImgPC3,
        loja: "bee fancy",
        link: "https://lojabeefancy.com.br/products/blusa-vintage-lana-del-rey?variant=46064020324516",
        categ: "cima",
    },
    {
        nome: "CAMISA NIRVANA",
        preco: "R$ 109,90",
        descricao: "Descrição do produto",
        imagem: ImgPC4,
        loja: "bee fancy",
        link: "https://lojabeefancy.com.br/products/camisa-nirvana?variant=44783440855204",
        categ: "cima",
    },
    {
        nome: "BLUSA BABY DARK",
        preco: "R$ 149,90",
        descricao: "Descrição do produto",
        imagem: ImgPC5,
        loja: "bee fancy",
        link: "https://lojabeefancy.com.br/products/blusa-baby-dark?variant=44783407890596",
        categ: "cima",
    },
    {
        nome: "suéter helena",
        preco: "R$ 239,90",
        descricao: "Descrição do produto",
        imagem: ImgPC6,
        loja: "bee fancy",
        link: "https://lojabeefancy.com.br/products/sueter-helena?variant=45031289290916",
        categ: "cima",
    },
    {
        nome: "Minivestido punk gótico",
        preco: "R$ 181,27",
        descricao: "Descrição do produto",
        imagem: ImgVestido5,
        loja: "Amazon",
        link: "https://www.amazon.com.br/Vestido-feminino-g%C3%B3tico-vintage-cintura/dp/B0CGJJH85N",
        categ: "vestidos",
    },
    {
        nome: "Meia Arrastão",
        preco: "R$ 33,46",
        descricao: "Descrição do produto",
        imagem: meia2,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/item/1005005753934871.html?spm=a2g0o.productlist.main.57.4b9fktJ4ktJ4Co&algo_pvid=d9f5b1a2-5a57-41c8-a8bd-f2caeae5c88c&algo_exp_id=d9f5b1a2-5a57-41c8-a8bd-f2caeae5c88c-28&pdp_npi=4%40dis%21BRL%2133.53%218.48%21%21%2141.46%2110.49%21%40210308a417247802020048526e31f6%2112000034232044533%21sea%21BR%210%21ABX&curPageLogUid=wXgWTtfcrQpB&utparam-url=scene%3Asearch%7Cquery_from%3A",
        categ: "meias",
    },
    {
        nome: "Meia Arrastão",
        preco: "R$ 12,99",
        descricao: "Descrição do produto",
        imagem: meia3,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/item/1005004892592618.html?spm=a2g0o.productlist.main.29.4b9fktJ4ktJ4Co&algo_pvid=d9f5b1a2-5a57-41c8-a8bd-f2caeae5c88c&algo_exp_id=d9f5b1a2-5a57-41c8-a8bd-f2caeae5c88c-14&pdp_npi=4%40dis%21BRL%2112.17%214.99%21%21%212.11%210.87%21%40210308a417247802020048526e31f6%2112000030917296736%21sea%21BR%210%21ABX&curPageLogUid=5s9kCU6flYhw&utparam-url=scene%3Asearch%7Cquery_from%3A",
        categ: "meias",
    },
    {
        nome: "Cinto Punk",
        preco: " R$34,90",
        descricao: "Descrição do produto",
        imagem: acessorio,
        loja: "Estreet",
        link: "https://www.estreet.com.br/product-page/cinto-punk",
        categ: "acessorios",
    },
    {
        nome: "Cinto Alternativo",
        preco: " R$25,90",
        descricao: "Descrição do produto",
        imagem: acessorios2,
        loja: "Shopee",
        link: "https://shopee.com.br/Cinto-Feminino-Plus-Size-Com-1-40cm-Punk-Rock-Pronta-Entrega-i.695111114.23711039633?sp_atk=e5541eda-9fbf-4205-a331-7d11b388a5d4&xptdk=e5541eda-9fbf-4205-a331-7d11b388a5d4",
        categ: "acessorios",
    },
    {
        nome: "Óculos Bayonetta",
        preco: " R$16,66",
        descricao: "Descrição do produto",
        imagem: acessorios3,
        loja: "AliExpress",
        link: "https://shopee.com.br/Y2K-Retro-Azul-Verde-Oval-Pequena-Moldura-De-%C3%93culos-Estilo-Moda-i.1006215031.25862466529?sp_atk=1c37e8d1-cc1c-413c-ac5f-cb728f1b9565&xptdk=1c37e8d1-cc1c-413c-ac5f-cb728f1b9565",
        categ: "acessorios",
    },
    {
        nome: "Coturno cross ",
        preco: "R$ 99,90",
        descricao: "Descrição do produto",
        imagem: Imgsap3,
        loja: "Estreet",
        link: "https://www.estreet.com.br/product-page/coturno-cross",
        categ: "calcados",
    },
    {
        nome: "Bota Plataforma",
        preco: "R$ 259,90",
        descricao: "Descrição do produto",
        imagem: Imgsap4,
        loja: "Mercado Livre",
        link: "https://produto.mercadolivre.com.br/MLB-4181552848-botas-femininas-com-plataforma-salto-alto-grosso-preto-2023-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
        categ: "calcados",
    },
    {
        nome: "CALÇA PUNKER STYLE",
        preco: "R$ 289,90",
        descricao: "Descrição do produto",
        imagem: ImgPB,
        loja: "bee fancy",
        link: "https://lojabeefancy.com.br/products/calca-punker-style?variant=44783441576100",
        categ: "baixo",
    },
    {
        nome: "Punk Mesh Saia",
        preco: "R$ 154,47",
        descricao: "Descrição do produto",
        imagem: ImgPB2,
        loja: "mercado livre",
        link: "https://produto.mercadolivre.com.br/MLB-4676237312-z8-punk-malha-saia-cosplay-traje-feminino-retro-gotico-01-_JM#is_advertising=true&position=11&search_layout=grid&type=pad&tracking_id=c50e5e5a-e6e5-4d5b-8774-841ad193e14c&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=11&ad_click_id=NDE1M2ZlM2ItNmQ2Ny00OGI0LTk1ZmUtYzIxN2ZhNzA1MDkx",
        categ: "baixo",
    },
    {
        nome: "Saia Góticas De Cintura Alta",
        preco: "R$ 142,55",
        descricao: "Descrição do produto",
        imagem: ImgPB3,
        loja: "mercado livre",
        link: "https://produto.mercadolivre.com.br/MLB-3762508011-1pc-saias-goticas-de-cintura-alta-saia-plissada-de-renda--_JM#is_advertising=true&position=1&search_layout=grid&type=pad&tracking_id=08494ee2-149f-4dee-9eec-b65858233fe1&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=MjAyM2IzODgtNTdkMC00ZWIwLTg1MGUtMjUxMGRhYTIwZTE2",
        categ: "baixo",
    },
    {
        nome: "Saia teia de aranha",
        preco: "R$ 143,62",
        descricao: "Descrição do produto",
        imagem: ImgPB4,
        loja: "mercado livre",
        link: "https://produto.mercadolivre.com.br/MLB-4517420248-saia-punk-gotica-com-borlas-em-estilo-teia-de-aranha-_JM#position%3D10%26search_layout%3Dstack%26type%3Ditem%26tracking_id%3D096b998a-4f1a-4a4e-8050-8c793aaecee9",
        categ: "baixo",
    },
    {
        nome: "Saia Preta Plissada",
        preco: "R$ 105,08",
        descricao: "Descrição do produto",
        imagem: ImgPB5,
        loja: "mercado livre",
        link: "https://produto.mercadolivre.com.br/MLB-3590925519-e6-saia-de-malha-punk-cosplay-traje-feminino-retr-gotico-11-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&attributes=COLOR_SECONDARY_COLOR%3AUHJldG8%3D%2CSIZE%3AWEwoRVU6NDAp",
        categ: "baixo",
    },
    {
        nome: "Saia Feminina De Renda",
        preco: "R$ 98,12",
        descricao: "Descrição do produto",
        imagem: ImgPB6,
        loja: "Mercado Livre",
        link: "https://produto.mercadolivre.com.br/MLB-4826732598-shaoke-saia-feminina-de-renda-de-vero-cor-gotica-escura-_JM#position%3D24%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3D54ad70f3-cf87-415e-9699-eb25ce3a1c31",
        categ: "baixo",
    },
    {
        nome: " Sapatos Game Magic Madoka",
        preco: "R$ 134,90",
        descricao: "Descrição do produto",
        imagem: Imgsap5,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/item/1005007355332983.html?spm=a2g0o.productlist.main.5.5f4a5giP5giPbI&algo_pvid=2b87a16b-ee66-48c2-8caf-33e2e936599a&algo_exp_id=2b87a16b-ee66-48c2-8caf-33e2e936599a-2&pdp_npi=4%40dis%21BRL%21317.66%21155.37%21%21%21392.76%21192.10%21%402101e07217247812925585587e7be5%2112000040400232824%21sea%21BR%210%21ABX&curPageLogUid=5gBMftN7yYe4&utparam-url=scene%3Asearch%7Cquery_from%3A",
        categ: "calcados",
    },
    {
        nome: "Shaoke Sapatos De Salto Alto ",
        preco: "R$ 164,90",
        descricao: "Descrição do produto",
        imagem: Imgsap6,
        loja: "Mercado Livre",
        link: "https://produto.mercadolivre.com.br/MLB-4941336832-shaoke-sapatos-de-salto-alto-com-espessura-para-mulheres-_JM#position%3D14%26search_layout%3Dstack%26type%3Ditem%26tracking_id%3Da14962a0-aaec-4060-9bef-1796c51f18e8",
        categ: "calcados",
    },
    {
        nome: "Sapatos Lolita Corrente ",
        preco: "R$ 158,90",
        descricao: "Descrição do produto",
        imagem: Imgsap7,
        loja: "Mercado livre",
        link: "https://produto.mercadolivre.com.br/MLB-3780257155-sapatos-lolita-corrente-metal-mulheres-calcados-goticos-_JM#is_advertising=true&position=1&search_layout=stack&type=pad&tracking_id=6235d243-09b4-4c81-a27c-c6318ca5a773&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=NTM2OGRiMzItYTQ0NC00MWM4LTljNjUtYWQzM2Q1ZGM2NGU5",
        categ: "calcados",
    },
    {
        nome: "ALL STAR HIKE ",
        preco: "R$ 189,90",
        descricao: "Descrição do produto",
        imagem: Imgsap8,
        loja: "Bee Fancy",
        link: "https://lojabeefancy.com.br/products/tenis-all-star-hike?variant=46075975336100",
        categ: "calcados",
    },
    {
        nome: "Brincos Gotícos",
        preco: " R$32,90",
        descricao: "Descrição do produto",
        imagem: acessorios4,
        loja: "Mercado Livre",
        link: "https://produto.mercadolivre.com.br/MLB-2649082795-par-de-brincos-goticos-hardcore-_JM",
        categ: "acessorios",
    },
    {
        nome: "Brinco CruzPreta",
        preco: " R$25,70",
        descricao: "Descrição do produto",
        imagem: acessorios5,
        loja: "Shopee",
        link: "https://shopee.com.br/Nova-Moda-Europ%C3%A9ia-Americana-De-A%C3%A7o-Inoxid%C3%A1vel-Brincos-De-%C3%93leo-Punk-Para-Homens-Gotejamento-J%C3%B3ias-Tit%C3%A2nio-Cruz-Retro-i.969113447.23832313383?sp_atk=71a42c41-6269-4dd6-9f5e-474d8b5c057f&xptdk=71a42c41-6269-4dd6-9f5e-474d8b5c057f",
        categ: "acessorios",
    },
    {
        nome: "Meia Arrastão",
        preco: "R$ 40,65",
        descricao: "Descrição do produto",
        imagem: meia4,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/item/1005005806458768.html?spm=a2g0o.productlist.main.19.3ab7hOkuhOkum6&algo_pvid=e51b7000-4c12-4dc3-b404-75d67ddccbdd&algo_exp_id=e51b7000-4c12-4dc3-b404-75d67ddccbdd-9&pdp_npi=4%40dis%21BRL%2139.05%214.99%21%21%2148.28%216.16%21%40210330dd17247818658402207e58c2%2112000034418266437%21sea%21BR%210%21ABX&curPageLogUid=hFdsIwyUQuEs&utparam-url=scene%3Asearch%7Cquery_from%3A",
        categ: "meias",
    },
    {
        nome: "Aquecedor de Pernas",
        preco: "R$ 25,65",
        descricao: "Descrição do produto",
        imagem: meia5,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/item/1005005885037419.html?spm=a2g0o.productlist.main.3.38ffuyNTuyNTTo&algo_pvid=092f17e8-dbdd-4285-aa60-ca120cfd6c3b&algo_exp_id=092f17e8-dbdd-4285-aa60-ca120cfd6c3b-1&pdp_npi=4%40dis%21BRL%2125.83%2125.83%21%21%214.48%214.48%21%40210318c317247819788097489e39a1%2112000034699850541%21sea%21BR%210%21ABX&curPageLogUid=2RGWBXNwegT5&utparam-url=scene%3Asearch%7Cquery_from%3A",
        categ: "meias",
    },
    {
        nome: "Meia dark",
        preco: "R$ 74,48",
        descricao: "Descrição do produto",
        imagem: meia6,
        loja: "AliExpress",
        link: "https://pt.aliexpress.com/item/1005006846510815.html?spm=a2g0o.productlist.seoads.9.eae9OwnUOwnUJA&p4p_pvid=202408271108529987316852062000001742326_5&s=p",
        categ: "meias",
    },
    
    
]