import express from 'express';
import { 
    getIndex,
    getDetalhes,
    getCadastro,
} from '../controller/Controllador.js';

export const routers = express.Router();

routers.get('/', getIndex); 

routers.get("/detalhes/:id", getDetalhes);

routers.get('/cadastro', getCadastro);