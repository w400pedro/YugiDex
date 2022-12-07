const express = require('express');
const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//     res.redirect('/yugi');
// });

// const usersRoutes = require('./tables/usuario/routes');
// app.use('/user', usersRoutes);

// const yugiRoutes = require('./tables/cartas/routes');
// app.use('/yugidex', yugiRoutes);

const db = require('./config/db-connection');
console.log(db);

app.listen(3000, () => console.log("Listening at 3000"));