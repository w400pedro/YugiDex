const { Usuario } = require('./model');

class UsuariosRepository {

    async save(usuario) {
        await Usuario.create(usuario);
    }

    async findOneEmail(email) {
        const usuario = await Usuario.findOne({
            where: {
                email
            }
        });
        return usuario;
    }

    async softdelete(email) {
        const ativo = 0;
        await Usuario.update({
            ativo
        },
            {
                where: { email: email },
            });
    }

    async findOneNome(nome) {
        const usuario = await Usuario.findOne({
            where: {
                nome
            }
        });
        return usuario;
    }

    async findOneEmailandSenha(email, senha) {
        const usuario = await Usuario.findOne({
            where: {
                email,
                senha
            }
        });
        return usuario;
    }
}

module.exports = UsuariosRepository;