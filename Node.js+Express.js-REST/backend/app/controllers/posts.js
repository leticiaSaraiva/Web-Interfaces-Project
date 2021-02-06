let posts = [
    {id: "2", texto: "Olá, como vai?", likes: "6"},
    {id: "3", texto: "Tudo bem com você?", likes: "10"}
];

module.exports.inserirPost = function(req, res){
    let post = req.body;
    posts.push(post);
    res.json(post).status(201);
}

module.exports.listarPosts = function(req, res){
    res.json(posts);
}

module.exports.buscarPostById = function(req, res){
    let id = req.params.id;

    let post = posts.find(function(post){
        return post.id == id;
    });

    if(post){
        res.json(post);
    }else{
        res.sendStatus(404);
    }
}

module.exports.deletarPost = function(req, res){
    let id = req.params.id;
    let idValido = false;

    posts = posts.filter(function(post){
        if(post.id == id){
            idValido = true;
        }
        return post.id != id;
    });

    if(idValido){
        res.json({mensagem: "Post deletado com sucesso!"});
    }else{
        res.status(404).send("Post não encontrado.");
    }
    
}