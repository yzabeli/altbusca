import prismaClient from "../../Prisma";

interface cadProdutos {
    nome: string
    descricao: string
    preco: string
    idGrupos: string
};

class ProdutosServices {
    async cadastrarProdutos({ nome, descricao, preco, idGrupos }: cadProdutos) {
        // console.log(nome, preco);
        await prismaClient.produtos.create({
            data: {
                nome: nome,
                descricao: descricao,
                preco: preco,
                idGrupos: idGrupos
            }
        });
        return ({ dados: 'Cadastro Efetuado com Sucesso' });
    };

    async consultarProdutos() {
        const resposta = await prismaClient.produtos.findMany({
            select: {
                nome: true,
                descricao: true,
                preco: true,
                idGrupos: true,
                grupos: {
                    select: {
                        nome: true
                    }
                }
            }
        });
       
        return resposta;
    };

    async consultarProdutosUnicos(id: string) {
        const resposta = await prismaClient.produtos.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                descricao: true,
                preco: true,
            }
        });
        return resposta;
    };
};

export { ProdutosServices };