const { Cartas } = require('./model');
const CartasRepository = require('./sql');

class CartasController {
    async search(req, res) {
        // let dex = await Cartas.findAll();
        // return res.json({dex: dex});
    }
}

module.exports = CartasController;