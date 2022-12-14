const jwt = require('jsonwebtoken');
const { Usuario } = require('./model');
const UsuariosRepository = require('./sql');
const YugidexRepository = require('../yugidex/sql');
const bcrypt = require('bcrypt');

class UsuariosController {
    constructor() {
        this.repository = new UsuariosRepository();
    }

    async search(req, res) {
        let usuarios = await Usuario.findAll();
        return res.json({usuarios: usuarios});
    }

    async searchbyEmailandSenha(req, res) {
        // fazer o bycript inverso da senha
        const { email, senha } = req.body;
        const senhacripto = bcrypt.hashSync(senha, 10)
        console.log(senhacripto)
        let usuarios = await this.repository.findOneEmailandSenha(email, senhacripto);
        return res.json({usuarios: usuarios});
    }

    async searchbyemail(req, res) {
        const { email } = req.params;
        let usuarios = await this.repository.findOneEmail(email);
        return res.json({usuarios: usuarios});
    }

    async searchbynome(req, res) {
        const { nome } = req.params;
        let usuarios = await this.repository.findOneNome(nome);
        return res.json({usuarios: usuarios});
    }
    
    async create(req, res) {
        const { email, senha , nome } = req.body;
        const usuarioEncontrado = await Usuario.findOne({
                where: {
                    email
                }
            });

        if (usuarioEncontrado){
            res.status(400);
            return res.json({message:"Já existe um usuário com esse e-mail."})
        }
        const user = await this.repository.save({
            email,
            nome, 
            senha: bcrypt.hashSync(senha, 10)
        });

        //const yugidexRepository = new YugidexRepository();
        //yugidexRepository.save({"usuarioEmail" : email});
        return res.status(201).json(user);
    }

    async softdelete(req, res) {
        const { email } = req.params;
        let usuarios = await this.repository.softdelete(email);
        return res.json({usuarios: usuarios});
    }

    async auth(req, res) {
        const { email, senha } = req.body;
        const usuarioEncontrado = await Usuario.findOne({
            where: {
                email
            }
        });
        const confere = bcrypt.compareSync(senha, usuarioEncontrado.senha);
        if (!confere) {
            return res.status(400).json({ msg: "Email ou senha incorretos."});
        }
        const meuJwt = jwt.sign(usuarioEncontrado.dataValues, "SECRET%$#")
        return res.json({token: meuJwt});
    }
}

module.exports = UsuariosController;