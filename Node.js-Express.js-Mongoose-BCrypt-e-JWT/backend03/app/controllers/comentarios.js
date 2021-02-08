const Comentario = require('../models/comentario');
const view = require('../views/comentarios');
const jwt = require('jsonwebtoken');

module.exports.inserirComentario = function(req, res){
    let id_post = req.body.id_post;
    let texto_ = req.body.texto;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Comentario.create({texto: texto_, post: id_post, usuario: id_usuario_logado});

    promise.then(function(comentario){
        res.status(201).json(view.render(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.listarComentarios = function(req, res){
    let promise = Comentario.find().exec();

    promise.then(function(comments){
        res.status(200).json(view.renderMany(comments));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.deletarComentario = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;
    
    let promise = Comentario.findOneAndDelete({_id: id, usuario: id_usuario_logado});
    
    promise.then(function(comentario){
        res.status(200).json(view.render(comentario));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro na requisição!"});
    });
}
