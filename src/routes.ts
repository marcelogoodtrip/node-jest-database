import { Router } from "express";
import { UsersController } from "./controllers/usersController";

const routes = Router();
const usersController = new UsersController()

routes.get('/users', usersController.getUsuario)

routes.post('/users', usersController.postUsuario)

//  MÉTODOS HTTP:
    //  GET -- ler dados;
    //  POST -- criar dados;
    //  PUT/PATCH -- editar dados;
    //  DELETE -- deletar dados;

export { routes };