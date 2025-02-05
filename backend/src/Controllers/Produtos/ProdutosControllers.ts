import { Request, Response } from "express";

import { ProdutosServices } from "../../Services/Produtos/ProdutosServices"

class ProdutosControllers {
    async cadastrarProdutos(req: Request, res: Response) {
        const { nome, descricao, preco } = req.body;
        const enviarDadosServices = new ProdutosServices();
        const resposta = enviarDadosServices.cadastrarProdutos({
            nome,
            descricao,
            preco
        });
        return res.json({
            success: true,
            message: "Ok!!"
        });
    };

    async consultarProdutos(req: Request, res: Response) {
        const enviarDadosServices = new ProdutosServices();
        const resposta = await enviarDadosServices.consultarProdutos();
        return res.json(resposta);
    };

    async consultarProdutosUnico(req: Request, res: Response) {
        const {id} = req.body;
        const enviarDadosServices = new ProdutosServices();
        const resposta = await enviarDadosServices.consultarProdutosUnicos(id);
        return res.json(resposta);
    };
};

export { ProdutosControllers };