const { Cartas } = require('./model');

class CartasRepository {

    async save(carta) {
        await Cartas.create(carta);
    }

    async findOneNome(nome) {
        const carta = await Cartas.findOne({
            where: {
                nome
            }
        });
        return carta;
    }

    async findOneId(id) {
        const carta = await Cartas.findOne({
            where: {
                id
            }
        });
        return carta;
    }

    async update(idParam, cartaBody) {
        const {nome, tipo, genero, nivel, ataque, defesa, texto, ativo} = cartaBody;
        await Cartas.update({
            nome, tipo, genero, nivel, ataque, defesa, texto, ativo
        },
            {
                where: { id: idParam },
            });
        const cartaQuery = await Cartas.findByPk(idParam);
        return cartaQuery.toJSON();
    }

    async softdelete(id) {
        console.log(id)
        const ativo = 0;
        await Cartas.update({
            ativo
        },
            {
                where: { id: id },
            });
    }
}

module.exports = CartasRepository;