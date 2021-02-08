const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');

module.exports.login = function(req, res){
    Usuario.findOne({email: req.body.email})
                .then(function(usuario){
                    if(bcrypt.compareSync(req.body.senha, usuario.senha)){
                        let token = jwt.sign({id: usuario._id}, "senha");
                        res.status(200).send({token: token});
                    }else{
                        res.status(401).send("E-mail ou senha errados. Por favor tente outra vez.");
                    }
                })
                .catch(function(error){
                    res.status(401).send("E-mail ou senha errados. Por favor tente outra vez.");
                });
}

module.exports.checar = function(req, res, next){
    let token = req.headers.token;

    jwt.verify(token, "senha", function(err, decoded){
        if(err){
            res.status(401).send("Token inválido!");
        }else{
            next();
        }
    });
    
}