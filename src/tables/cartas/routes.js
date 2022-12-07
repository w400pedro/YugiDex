const { Router } = require('express');
const router = Router();

const CartasController = require('../cartas/controller');
const controller = new CartasController();

//não foi feito
router.get('/', (req, res) => controller.search(req, res));

module.exports = router;