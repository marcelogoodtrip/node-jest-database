import database from "../database";
import { Request, Response } from "express";

export class UsersController {
    postUsuario(request: Request, response: Response): Response {
        const { name } = request.body;
    
        if(name.length < 1) {
            return response.status(403).json({'mensagem': 'Não é possível criar usuários sem um nome'})
        }
        
        database.push(name);
        return response.status(201).json({'mensagem': `Usuário ${name} criado`})
    }

    getUsuario(request: Request, response: Response): Response {
        return response.status(200).json(database)
    }
}