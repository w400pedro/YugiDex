const { Yugidex } = require('./model');

class YugidexRepository {

    async save(usercarta) {
        await Yugidex.create(usercarta);
    }

    async findOneId(id) {
        const dex = await Yugidex.findOne({
            where: {
                id
            }
        });
        return dex;
    }

    async findOneEmail(usuarioEmail) {
        const dex = await Yugidex.findOne({
            where: {
                usuarioEmail
            }
        });
        return dex;
    }

    async findOneCartaId(cartaId) {
        const dex = await Yugidex.findOne({
            where: {
                cartaId
            }
        });
        return dex;
    }

    async findOneEmailandCarta(cartaId, usuarioEmail) {
        const dex = await Yugidex.findOne({
            where: {
                cartaId,
                usuarioEmail
            }
        });
        return dex;
    }

    async softdelete(usuarioEmail, cartaId) {
        const ativo = 0;
        await Yugidex.update({
            ativo
        },
            {
                where: { usuarioEmail: usuarioEmail, cartaId: cartaId },
            });
    }

}

module.exports = YugidexRepository;