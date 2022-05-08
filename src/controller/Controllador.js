import { connection } from '../database/connection.js';
import { monstro } from '../model/monstro.js';

let message = "";
let type = "";

export const getIndex = async (req, res) => {
    setTimeout(() => {
        message = "";
        type = "";
    }, 1000);

    const column = req.query['column'] || 'id';
    const order = req.query['order'] || 'asc';
    const ver = req.query['ver'] || false;
    const valor = req.query['valor'] || '';
    
    

    try {
        let monstruario
        if (ver) {

            monstruario = await monstro.findAll({where: {[column]: valor}});
        } else {

            monstruario = await monstro.findAll({order: [[column, order]]});
        }

        if(column === 'id') {
            message = "Bem-vindo(a) Pesquisador(a) ao MONSTRUARIO! \r\n\r\n Conectado ao servidor com sucesso!";
            type = "success";
        }

        res.render('index', { monstruario, monstroPut: null, monstroDel: null, message, type});
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
    res.render('cadastro', { message, type });
    } catch (error){
        res.send(error.message); 
    }
}

export const postCadastro = async (req, res) => {
    try {
        const monstroNovo = req.body;

        if(!monstroNovo){
            message = "Preencha todos os campos!"
            type = "danger";
            return res.redirect('/cadastro');
        }

        await monstro.create(monstroNovo);
        message = "Monstro cadastrado com sucesso!"
        type = "success";
        res.redirect('/');
    } catch (error){
        res.send(error.message); 
    }
}

export const getById = async (req, res) => {
    try {
        const method = req.params.method;
        const monstruario = await monstro.findAll({order: [["id", "ASC"]]});
        const monstroNovo = await monstro.findByPk(req.params.id);

        if(method == 'put'){
            res.render("index", {
                monstruario,
                monstroPut: monstroNovo,
                monstroDel: null,
                message,
                type 
            });
        } else{
            res.render("index", {
                monstruario,
                monstroPut: null,
                monstroDel: monstroNovo,
                message,
                type
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
        message = "Monstro atualizado com sucesso!"
        type = "success";
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
        message = "Monstro excluído com sucesso!"
        type = "success";
        res.redirect('/')
    }
    catch(error){
        res.send(error.message)
    }
}