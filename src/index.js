const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

const usersRoutes = require('./tables/usuario/routes');
app.use('/user', usersRoutes);

const yugiRoutes = require('./tables/yugidex/routes');
app.use('/yugidex', yugiRoutes);

const cartasRoutes = require('./tables/cartas/routes');
app.use('/carta', cartasRoutes);

const db = require('./config/db-connection');
console.log(db);

const PORT=process.env.PORT || 3001;
app.listen(PORT,() => console.log(`Iniciado na porta ${PORT}`))