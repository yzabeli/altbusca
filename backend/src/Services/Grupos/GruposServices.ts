import prismaClient from '../../Prisma'

interface CadGrupos {
    nome: string
}

class GruposServices {
    async cadastrarGrupos({ nome }: CadGrupos) {
        await prismaClient.grupos.create({
            data: {
                nome: nome
            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }

    // **************************************
    async listarGrupos() {
        const resposta = await prismaClient.grupos.findMany();
        return resposta;
    };
    // ******************************************
}

export { GruposServices }