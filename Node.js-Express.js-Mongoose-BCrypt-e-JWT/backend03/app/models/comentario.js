const mongoose = require('mongoose');
const Post = require('./post');
const Usuario = require('./usuario');

module.exports = function(){
    var schema = mongoose.Schema({
        texto: {
            type: "String",
            required: true,
        },
        post: {
            type: mongoose.Schema.ObjectId,
            ref: "Post",
        },
        usuario: {
            type: mongoose.Schema.ObjectId,
            ref: "Usuario",
        }
    });

    return mongoose.model("Comentario", schema);
}(); 