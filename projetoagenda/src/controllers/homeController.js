const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
    let contatos = await Contato.buscaContatos();
    if(!req.session.user) {
        contatos = null;
        return res.render('index', { contatos });
    }
    res.render('index', { contatos });
};
