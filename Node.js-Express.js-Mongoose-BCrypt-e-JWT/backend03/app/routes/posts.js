const controller = require('../controllers/posts');
const controllerAuth = require('../controllers/auth');

module.exports = function(app){
    app.use("/api/posts", controllerAuth.checar);
    app.post("/api/posts", controller.inserirPost);
    app.get("/api/posts", controller.listarPosts);
    app.delete("/api/posts/:id", controller.deletarPost);
    app.get("/api/posts/:id", controller.buscarPostPorId);
    app.get("/api/posts/:id/comentarios", controller.obterComentarios);
} 