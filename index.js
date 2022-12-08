const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/yugi');
});

const usersRoutes = require('./tables/usuario/routes');
app.use('/user', usersRoutes);

const yugiRoutes = require('./tables/yugidex/routes');
app.use('/yugidex', yugiRoutes);

const cartasRoutes = require('./tables/cartas/routes');
app.use('/carta', cartasRoutes);

const db = require('./config/db-connection');
console.log(db);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Server iniciado na porta '+port));