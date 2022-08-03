"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const database_1 = __importDefault(require("../database"));
class UsersController {
    postUsuario(request, response) {
        const { name } = request.body;
        if (name.length < 1) {
            return response.status(403).json({ 'mensagem': 'Não é possível criar usuários sem um nome' });
        }
        database_1.default.push(name);
        return response.status(201).json({ 'mensagem': `Usuário ${name} criado` });
    }
    getUsuario(request, response) {
        return response.status(200).json(database_1.default);
    }
}
exports.UsersController = UsersController;
