const mongoose = require('mongoose');
const Usuario = require('./usuario');

module.exports = function(){
    var schema = mongoose.Schema({
        texto: {
            type: "String",
            required: true,
        },
        likes: {
            type: "Number",
            required: false,
        },
        usuario: {
            type: mongoose.Schema.ObjectId,
            ref: "Usuario",
        }
    });

    return mongoose.model("Post", schema);
}(); 