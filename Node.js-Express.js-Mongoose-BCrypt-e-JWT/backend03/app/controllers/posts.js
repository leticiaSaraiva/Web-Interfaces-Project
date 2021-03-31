const Post = require('../models/post');
const Comentario = require('../models/comentario');

const view = require('../views/posts');
const viewComentarios = require('../views/comentarios');

const jwt = require("jsonwebtoken");

module.exports.inserirPost = function(req, res){
    let texto_ = req.body.texto;
    let likes_ = req.body.likes;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let post = {
        texto: texto_,
        likes: likes_,
        usuario: id_usuario_logado
    }
    
    let promise = Post.create(post);
    
    promise.then(function(post){
        res.status(201).json(view.render(post));
    }).catch(function(error){
        res.status(401).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.listarPosts = function(req, res){
    let promise = Post.find().populate("usuario").exec();
    
    promise.then(function(posts){
        res.status(200).json(view.renderMany(posts));
    }).catch(function(error){
        res.status(401).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.buscarPostPorId = function(req, res){
    let id = req.params.id;

    let promise = Post.findById(id).exec();
    promise.then(function(post){
        res.status(200).json(view.render(post));
    }).catch(function(error){
        res.status(401).json({mensagem: "Erro na requisição!"});
    });

}

module.exports.deletarPost = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;
    
    let promise = Post.findOneAndDelete({_id: id, usuario: id_usuario_logado});
    
    promise.then(function(post){
        res.status(200).json(view.render(post));
    }).catch(function(error){
        res.status(401).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.obterComentarios = function(req, res){
    let id = req.params.id;

    let promise = Comentario.find({post:id}).populate("usuario").exec();

    promise.then(function(comentarios){
        res.status(200).json(viewComentarios.renderMany(comentarios));
    }).catch(function(error){
        res.status(401).json({mensagem: "Erro na requisição!"});
    });
}
