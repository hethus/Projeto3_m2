import { connection } from '../database/connection.js';
import { monstro } from '../model/monstro.js';

export const getIndex = async (req, res) => {
    try {
        const monstruario = await monstro.findAll();
        res.render('index', { monstruario, monstroPut: null, monstroDel: null});
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
    try {
    res.render('cadastro');
    } catch (error){
        res.send(error.message); 
    }
}

export const postCadastro = async (req, res) => {
    try {
        const monstroNovo = req.body;

        if(!monstroNovo){
            return res.redirect('/cadastro');
        }

        await monstro.create(monstroNovo);
        res.redirect('/');
    } catch (error){
        res.send(error.message); 
    }
}

export const getById = async (req, res) => {
    try {
        const method = req.params.method;
        const monstruario = await monstro.findAll();
        const monstroNovo = await monstro.findByPk(req.params.id);

        if(method == 'put'){
            res.render("index", {
                monstruario,
                monstroPut: monstroNovo,
                monstroDel: null
            });
        } else{
            res.render("index", {
                monstruario,
                monstroPut: null,
                monstroDel: monstroNovo
            });
        }
    } catch (error){
        res.send(error.message); 
    }
};

export const update = async (req, res) => {
    try {
        const monstroNovo = req.body;
        await monstro.update(monstroNovo, {where: {id: req.params.id}});
        res.redirect('/');
    } catch (error){
        res.send(error.message); 
    }
};

export const getDeletar = async (req, res) => {
    try {
         await monstro.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }
    catch(error){
        res.send(error.message)
    }
}