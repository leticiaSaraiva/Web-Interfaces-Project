const Post = require('../models/post');
const Comentario = require('../models/comentario');

const view = require('../views/posts');
const viewComentarios = require('../views/comentarios');

module.exports.inserirPost = function(req, res){
    let post = req.body;
    let promise = Post.create(post);

    promise.then(function(post){
        res.status(201).json(view.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.listarPosts = function(req, res){
    let promise = Post.find().exec();
    
    promise.then(function(posts){
        res.status(200).json(view.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.buscarPostPorId = function(req, res){
    let id = req.params.id;

    let promise = Post.findById(id).exec();
    promise.then(function(post){
        res.status(200).json(view.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro na requisição!"});
    });

}

module.exports.deletarPost = function(req, res){
    let id = req.params.id;

    let promise = Post.findByIdAndDelete(id);
    promise.then(function(post){
        res.status(200).json(view.render(post));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.obterComentarios = function(req, res){
    let id = req.params.id;

    let promise = Comentario.find({post:id}).exec();

    promise.then(function(comentarios){
        res.status(200).json(viewComentarios.renderMany(comentarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro na requisição!"});
    });
}

