let usuarios = [
    {id: "2", nome: "João", email: "joao@gmail.com", senha: "123"},
    {id: "3", nome: "Carlos", email: "carlos@gmail.com", senha: "1010"}
];

module.exports.inserirUsuario = function(req, res){
    let usuario = req.body;
    usuarios.push(usuario);
    res.json(usuario).status(201);
}

module.exports.listarUsuarios = function(req, res){
    res.json(usuarios);
}

module.exports.buscarUsuarioById = function(req, res){
    let id = req.params.id;

    let usuario = usuarios.find(function(usuario){
        return usuario.id == id;
    });

    if(usuario){
        res.json(usuario);
    }else{
        res.sendStatus(404);
    }
}

module.exports.deletarUsuario = function(req, res){
    let id = req.params.id;
    let idValido = false;

    usuarios = usuarios.filter(function(usuario){
        if(usuario.id == id){
            idValido = true;
        }
        return usuario.id != id;
    });

    if(idValido){
        res.json({mensagem: "Usuário deletado com sucesso!"});
    }else{
        res.status(404).send("Usuário não encontrado.");
    }
    
}