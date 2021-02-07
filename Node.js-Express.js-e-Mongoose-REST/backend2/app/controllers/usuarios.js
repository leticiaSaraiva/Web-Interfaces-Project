const Usuario = require('../models/usuario');
const Post = require('../models/post');

const view = require('../views/usuarios');
const viewPosts = require('../views/posts');

module.exports.inserirUsuario = function(req, res){
    let usuario = req.body;
    let promise = Usuario.create(usuario);
    
    promise.then(function(usuario){
        res.status(201).json(view.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.listarUsuarios = function(req, res){
    let promise = Usuario.find().exec();

    promise.then(function(usuarios){
        res.status(200).json(view.renderMany(usuarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.buscarUsuarioPorId = function(req, res){
    let id = req.params.id;

    let promise = Usuario.findById(id).exec();
    promise.then(function(usuario){
        res.status(200).json(view.render(usuario));
    }).catch(function(error){
        res.status(404).json({mensagem: "Erro na requisição!"});
    });

}

module.exports.deletarUsuario = function(req, res){
    let id = req.params.id;

    let promise = Usuario.findByIdAndDelete(id);

    promise.then(function(usuario){
        res.status(200).json(view.render(usuario));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.obterPosts = function(req, res){
    let id = req.params.id;

    let promise = Post.find({usuario:id}).exec();
    promise.then(function(posts){
        res.status(200).json(viewPosts.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro na requisição!"});
    });
} 