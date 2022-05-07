import express from 'express';
import { 
    getIndex,
    getDetalhes,
    getCadastro,
    postCadastro,
    getById,
    update,
    getDeletar
} from '../controller/Controllador.js';

export const routers = express.Router();

routers.get('/', getIndex); 

routers.get("/detalhes/:id", getDetalhes);

routers.get('/cadastro', getCadastro);

routers.post('/cadastro', postCadastro);

routers.get('/getById/:id/:method', getById);

routers.post('/update/:id', update);

routers.get('/remove/:id', getDeletar);