import { Router } from "express";

import { UsuariosControllers } from "./Controllers/Usuarios/UsuariosControllers";
import { GruposControllers } from "./Controllers/Grupos/GruposControllers";
import { LoginUsuariosControllers } from "./Controllers/Login/LoginUsuariosControllers";
import { PedidosControllers } from "./Controllers/Pedido/PedidosControllers";
import { ProdutosControllers } from "./Controllers/Produtos/ProdutosControllers";

import { estaAutenticado } from "./middleware/estaAutenticado";

const router = Router();

router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.get('/ConsultarUsuarios', estaAutenticado, new UsuariosControllers().consultarUsuarios)
router.post('/ConsultarUsuariosUnico', estaAutenticado, new UsuariosControllers().consultarUsuariosUnico)
router.put('/AlterarDadosUsuarios', estaAutenticado, new UsuariosControllers().alterarDadosUsuarios)
router.delete('/ApagarUsuario/:id', estaAutenticado, new UsuariosControllers().apagarUsuarios)

router.post('/CadastrarGrupos', estaAutenticado, new GruposControllers().cadastrarGrupos)
router.get('/ListarGrupos', new GruposControllers().listarGrupos);

router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios)
router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken)

router.post('/CadastrarProdutos', estaAutenticado, new ProdutosControllers().cadastrarProdutos);

export default router;