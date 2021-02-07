const Comentario = require('../models/comentario');
const view = require('../views/comentarios');

module.exports.inserirComentario = function(req, res){
    let comentario = req.body;
    let promise = Comentario.create(comentario);

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

    let promise = Comentario.findByIdAndDelete(id);

    promise.then(function(comentario){
        res.status(200).json(view.render(comentario));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro na requisição!"});
    });
}

