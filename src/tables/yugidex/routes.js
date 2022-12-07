const { Router } = require('express');
const router = Router();

const YugidexController = require('./controller');
const CartasController = require('../cartas/controller');
const controller = new YugidexController();
const controllerCartas = new CartasController();

router.get('/', (req, res) => controller.search(req, res));

//não foi feito
router.post('/insereCarta', (req, res) => controllerCartas.create(req, res));

module.exports = router;