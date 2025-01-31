import prismaClient from "../../Prisma";
import { hash } from "bcryptjs";

interface cadUsuarios {
    nome: string
    email: string
    password: string
    idGrupos: string
};

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, password, idGrupos }: cadUsuarios) {
        const senhaCrypt = await hash(password, 8);
        await prismaClient.usuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt,
                idGrupos: idGrupos
            }
        });
        return ({ dados: 'Cadastro Efetuada Com Sucesso' });
    };
};