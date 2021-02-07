function render(comentario){
    return {
        id: comentario._id,
        texto: comentario.texto,
        usuario: comentario.usuario,
        post: comentario.post,
    }
}
module.exports.render = render;

function renderMany(comentarios){
    return comentarios.map(render);
}
module.exports.renderMany = renderMany; 