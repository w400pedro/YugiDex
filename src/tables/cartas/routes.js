const { Router } = require('express');
const router = Router();

const CartasController = require('../cartas/controller');
const controller = new CartasController();

router.post('/cadastrar', (req, res) => controller.create(req, res));
router.get('/mostrar', (req, res) => controller.search(req, res));
router.put('/softdelete/:id', (req, res) => controller.softdelete(req, res));
router.get('/mostrar/:id', (req, res) => controller.searchbyid(req, res));
router.put('/update/:id', (req, res) => controller.update(req, res));

module.exports = router;