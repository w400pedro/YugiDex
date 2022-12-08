const { Router } = require('express');
const router = Router();

const UsuarioController = require('./controller');
const controller = new UsuarioController();

router.post('/cadastrar', (req, res) => controller.create(req, res));
router.post('/login', (req, res) => controller.searchbyEmailandSenha(req, res));
router.get('/mostrar', (req, res) => controller.search(req, res));
router.get('/mostrarPorNome/:nome', (req, res) => controller.searchbynome(req, res));
router.get('/mostrarPorEmail/:email', (req, res) => controller.searchbyemail(req, res));
router.post('/auth', (req, res) => controller.auth(req, res));
router.put('/softdelete/:email', (req, res) => controller.softdelete(req, res));

module.exports = router;