const { Sequelize } = require('sequelize');

const sequelizeCon = new Sequelize('postgresql://postgres:KXEKFRnWSzuqLgR58JQT@containers-us-west-71.railway.app:5616/railway', {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
});

sequelizeCon
  .authenticate()
  .then(() => {
    console.log('Conexão Estabelecida.');
  })
  .catch(err => {
    console.log('Erro ao estabelecer conexão:', err);
});

module.exports = { sequelizeCon };