import Sequelize from 'sequelize';
import { connection } from '../database/connection.js';

export const monstro = connection.define('registro', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
	nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
	desastre: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
	altura: {
        type: Sequelize.STRING,
        allowNull: false
    },
	peso: {
        type: Sequelize.STRING,
        allowNull: false
    },
	agressivo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
	sexo: {
        type: Sequelize.STRING,
        allowNull: false
    },
	raca: {
        type: Sequelize.STRING,
        allowNull: false
    },
	pesquisador: {
        type: Sequelize.STRING,
        allowNull: false
    },
	imagem: {
        type: Sequelize.STRING,
        allowNull: false
    },
	descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
	caracteristica: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamp: false
});

