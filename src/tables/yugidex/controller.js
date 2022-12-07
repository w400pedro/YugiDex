const { Yugidex } = require('./model');
const YugidexRepository = require('./sql');

class YugidexController {
    constructor() {
        this.repository = new YugidexRepository();
    }
    async search(req, res) {
        let dex = await Yugidex.findAll();
        return res.json({dex: dex});
    }

    async searchbyId(req, res) {
        const { id } = req.params
        let dex = await this.repository.findOneId(id);
        return res.json({dex: dex});
    }

    async searchbyEmail(req, res) {
        const { usuarioEmail } = req.params
        let dex = await this.repository.findOneEmail(usuarioEmail);
        return res.json({dex: dex});
    }

    async searchbyCartaId(req, res) {
        const { cartaId } = req.params
        let dex = await this.repository.findOneCartaId(cartaId);
        return res.json({dex: dex});
    }

    async searchbyEmailandCarta(req, res) {
        const { cartaId, usuarioEmail } = req.body
        let dex = await this.repository.findOneEmailandCarta(cartaId, usuarioEmail);
        return res.json({dex: dex});
    }

    async create(req, res) {
        const { foto, usuarioEmail , cartaId } = req.body;
        const usuariocartaEncontrado = await Yugidex.findOne({
                where: {
                    usuarioEmail,
                    cartaId
                }
            });

        if (usuariocartaEncontrado){
            res.status(400);
            return res.json({message:"Já existe um usuário com essa carta."})
        }
        const user = await this.repository.save({
            foto,
            cartaId, 
            usuarioEmail
        });

        //const yugidexRepository = new YugidexRepository();
        //yugidexRepository.save({"usuarioEmail" : email});
        return res.status(201).json(user);
    }

    async softdelete(req, res) {
        const { usuarioEmail, cartaId } = req.body;
        let dex = await this.repository.softdelete(usuarioEmail, cartaId);
        return res.json({dex: dex});
    }
}

module.exports = YugidexController;