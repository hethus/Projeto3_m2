import { connection } from '../database/connection.js';
import { monstro } from '../model/monstro.js';

export const getIndex = async (req, res) => {
    try {
        const monstruario = await monstro.findAll();
        res.render('index', { monstruario });
    } catch (error){
        res.send(error.message); 
    }
}

export const getDetalhes = async (req, res) => {
    try {
        let deMonstro = await monstro.findByPk(req.params.id);

        res.render('detalhes', { deMonstro });
    } catch (error){
        res.send(error.message); 
    }
}

export const getCadastro = (req, res) => {
    res.render('cadastro');
}

