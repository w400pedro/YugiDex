const { DataTypes, Model } = require('sequelize');
const { sequelizeCon } = require('../../config/db-connection');

class Cartas extends Model { }

Cartas.init({
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    genero: DataTypes.STRING,
    nivel: DataTypes.STRING,
    ataque: DataTypes.STRING,
    defesa: DataTypes.STRING,
    texto: DataTypes.STRING,
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
},
    {
        sequelize: sequelizeCon,
        schema: 'public',
        modelName: 'cartas'
    });

Cartas.sync();

module.exports = { Cartas };
