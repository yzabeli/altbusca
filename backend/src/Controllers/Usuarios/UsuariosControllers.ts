import { Request, Response } from "express";

class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, password, idGrupos } = req.body;
        console.log(nome, email, password, idGrupos);
    };
};

export { UsuariosControllers };