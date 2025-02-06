import prismaClient from "../../Prisma";

interface cadPedidos {
    nome: string
    descricao: string
    preco: string
};

class CadastrarPedidos {
    async cadastrarPedidos({ nome, descricao, preco }: cadPedidos) {
        await prismaClient.pedidos.create({
            data: {
                nome: nome,
                descricao: descricao,
                preco: preco,
            }
        });
    };
};

export { CadastrarPedidos }