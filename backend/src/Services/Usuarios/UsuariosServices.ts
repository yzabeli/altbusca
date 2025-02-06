import prismaClient from "../../Prisma";
import { hash } from "bcryptjs";

interface cadUsuarios {
    nome: string
    email: string
    cnpj: string
    telefone: string
    cep: string
    rua: string
    numero: string
    cidade: string
    uf: string
    password: string
};

interface AlterarUsuarios {
    id: string,
    nome: string,
    email: string
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, cnpj, telefone, cep, rua, numero, cidade, uf, password }: cadUsuarios) {
        const senhaCrypt = await hash(password, 8);
        await prismaClient.usuarios.create({
            data: {
                nome: nome,
                email: email,
                cnpj: cnpj,
                telefone: telefone,
                cep: cep,
                rua: rua,
                numero: numero,
                cidade: cidade,
                estado: uf,
                senha: senhaCrypt,
            }
        });
        return ({ dados: 'Cadastro Efetuada Com Sucesso' });
    };

    async consultarUsuarios() {
        const resposta = await prismaClient.usuarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
            }
        })
        return resposta
    }

    async consultarUsuariosUnico(id: string) {
        const resposta = await prismaClient.usuarios.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                senha: true
            }
        })
        return resposta
    }

    async alterarDadosUsuarios({ id, nome, email }: AlterarUsuarios) {
        await prismaClient.usuarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email
            }
        })
        return ({ dados: 'Cadastro Alterado Com Sucesso' })
    }

    async apagarUsuarios(id: string) {
        await prismaClient.usuarios.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Registro Apagado com Sucesso' })
    }
};

export {UsuariosServices};