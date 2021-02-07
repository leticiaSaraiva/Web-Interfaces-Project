const bodyParser = require('body-parser');
const express = require('express');

const routerUsuarios = require('../app/routes/usuarios');
const routerPosts = require('../app/routes/posts');
const routerComentarios = require('../app/routes/comentarios');

module.exports = function(){
    let app = express();

    app.set("port", 4000);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    app.use(express.static('./public'));

    routerUsuarios(app);
    routerPosts(app);
    routerComentarios(app);
    return app;
}; 