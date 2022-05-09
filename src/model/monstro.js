import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const monstro = connection.define(
  "registro",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
    },
    idade: {
      type: Sequelize.STRING,
    },
    desastre: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    altura: {
      type: Sequelize.STRING,
    },
    peso: {
      type: Sequelize.STRING,
    },
    agressivo: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sexo: {
      type: Sequelize.STRING,
    },
    raca: {
      type: Sequelize.STRING,
    },
    pesquisador: {
      type: Sequelize.STRING,
    },
    imagem: {
      type: Sequelize.STRING,
    },
    descricao: {
      type: Sequelize.STRING,
    },
    caracteristica: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamp: false,
  }
);

const initTable = async () => {
  try {
      await filmes.sync()
  }
  catch(error){
      error.message
  }
}

initTable()