const { DataTypes, Model } = require('sequelize');
const { Usuario } = require('../usuario/model');
const { Cartas } = require('../cartas/model');
const { sequelizeCon } = require('../../config/db-connection');

class Yugidex extends Model { }

Yugidex.init({
    foto: DataTypes.STRING,
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
},
    {
        sequelize: sequelizeCon,
        schema: 'public',
        modelName: 'dexes'
    });

    Yugidex.belongsTo(Usuario, {
        onDelete: 'cascade',
        onUpdate: 'cascade'
    });

    Yugidex.belongsTo(Cartas, { 
        onDelete: 'cascade',
        onUpdate: 'cascade'
    });

Yugidex.sync();

module.exports = { Yugidex };
