const { Router } = require('express');
const router = Router();

const UsuarioController = require('./controller');
const controller = new UsuarioController();

router.post('/', (req, res) => controller.create(req, res));
router.get('/', (req, res) => controller.search(req, res));
router.post('/auth', (req, res) => controller.auth(req, res));

module.exports = router;