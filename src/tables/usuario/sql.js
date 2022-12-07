const { Usuario } = require('./model');

class UsuariosRepository {

    async save(usuario) {
        await Usuario.create(usuario);
    }

    async findOneEmailSenha(email, senha) {
        const usuario = await Usuario.findOne({
            where: {
                email, senha
            }
        });
        return usuario;
    }
}

module.exports = UsuariosRepository;