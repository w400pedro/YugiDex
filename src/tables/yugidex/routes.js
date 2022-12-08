const { Router } = require('express');
const router = Router();

const YugidexController = require('./controller');
const CartasController = require('../cartas/controller');
const controller = new YugidexController();
const controllerCartas = new CartasController();

router.get('/mostrar', (req, res) => controller.search(req, res));
router.post('/insereCarta', (req, res) => controller.create(req, res));
router.post('/softdelete', (req, res) => controller.softdelete(req, res));
router.get('/mostrarid/:id', (req, res) => controller.searchbyId(req, res));
router.get('/mostraremail/:usuarioEmail', (req, res) => controller.searchbyEmail(req, res));
router.get('/mostrarcartaId/:cartaId', (req, res) => controller.searchbyCartaId(req, res));
router.post('/mostrarporCartaeEmail', (req, res) => controller.searchbyEmailandCarta(req, res));

module.exports = router;