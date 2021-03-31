const Usuario = require('../models/usuario');
const Post = require('../models/post');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const view = require('../views/usuarios');
const viewPosts = require('../views/posts');

module.exports.inserirUsuario = function(req, res){
    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
    };
    let promise = Usuario.create(usuario);
    
    promise.then(function(usuario){
        res.status(201).json(view.render(usuario));
    }).catch(function(error){
        res.status(401).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.listarUsuarios = function(req, res){
    let promise = Usuario.find().exec();

    promise.then(function(usuarios){
        res.status(200).json(view.renderMany(usuarios));
    }).catch(function(error){
        res.status(401).json({mensagem: "Erro na requisição!"});
    });
}

module.exports.buscarUsuarioPorId = function(req, res){
    let id = req.params.id;

    let promise = Usuario.findById(id).exec();
    promise.then(function(usuario){
        res.status(200).json(view.render(usuario));
    }).catch(function(error){
        res.status(401).json({mensagem: "Erro na requisição!"});
    });

}

module.exports.deletarUsuario = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;
    
    if(id == id_usuario_logado){
        let promise = Usuario.findByIdAndDelete(id);

        promise.then(function(usuario){
            res.status(200).json(view.render(usuario));
        }).catch(function(error){
            res.status(500).json({mensagem: "Erro na requisição!"});
        });
    }else{
        res.status(401).json({mensagem: "Erro na requisição."});
    }
    
}

module.exports.obterPosts = function(req, res){
    let id = req.params.id;

    let promise = Post.find({usuario:id}).exec();
    promise.then(function(posts){
        res.status(200).json(viewPosts.renderMany(posts));
    }).catch(function(error){
        res.status(401).json({mensagem: "Erro na requisição!"});
    });
} 