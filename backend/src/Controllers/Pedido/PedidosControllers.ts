import { Request, Response } from "express";

class PedidosControllers {
    async cadastrarPedidos(req: Request, res: Response) {
        const { nome, descricao, preco } = req.body;
        console.log(nome, descricao, preco);
    };
};

export { PedidosControllers };