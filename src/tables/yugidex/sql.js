const { Yugidex } = require('./model');

class YugidexRepository {

    async save(usuario) {
        await Yugidex.create(usuario);
    }

}

module.exports = YugidexRepository;