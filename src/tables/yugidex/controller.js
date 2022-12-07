const { Yugidex } = require('./model');
const YugidexRepository = require('./sql');

class YugidexController {
    async search(req, res) {
        let dex = await Yugidex.findAll();
        return res.json({dex: dex});
    }
}

module.exports = YugidexController;