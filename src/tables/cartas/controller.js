const { Cartas } = require('./model');
const CartasRepository = require('./sql');

class CartasController {
    constructor() {
        this.repository = new CartasRepository();
    }

    async softdelete(req, res) {
        const { id } = req.params;
        let cartas = await this.repository.softdelete(id);
        return res.json({cartas: cartas});
    }

    async search(req, res) {
        let cartas = await Cartas.findAll();
        return res.json({cartas: cartas});
    }

    async searchbyid(req, res) {
        const { id } = req.params;
        let cartas = await this.repository.findOneId(id);
        return res.json({cartas: cartas});
    }

    async create(req, res) {
        const { nome, tipo, nivel, genero, ataque, defesa, texto } = req.body;
        const cartaEncontrado = await Cartas.findOne({
                where: {
                    nome
                }
            });

        if (cartaEncontrado){
            res.status(400);
            return res.json({message:"Já existe uma carta com esse nome."})
        }
        const cartas = await this.repository.save({
            nome,
            tipo,
            genero,
            nivel,
            ataque,
            defesa,
            texto
        });

        return res.status(201).json(cartas);
    }

    async update(req, res) {
        const { id } = req.params;
        const carta = await this.repository.findOneId(id);
        if (carta) {
            try {
                const response = await this.repository.update(id, req.body);
                return res.json(response);
            } catch(e){
                res.status(400);
                console.error(e);
                return res.json({ message: "Body inválido ou Sem autorização" });
            }
            
        } else {
            res.status(404);
            return res.json({ message: "Objeto não encontrado ou Sem autorização" });
        }
    }

}

module.exports = CartasController;