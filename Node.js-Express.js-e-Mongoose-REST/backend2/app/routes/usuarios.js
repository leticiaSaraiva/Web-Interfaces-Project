const controller = require('../controllers/usuarios');

module.exports = function(app){
      app.get("/api/usuarios", controller.listarUsuarios);
      app.get("/api/usuarios/:id", controller.buscarUsuarioPorId);
      app.get("/api/usuarios/:id/posts", controller.obterPosts);
      app.post("/api/usuarios", controller.inserirUsuario);
      app.delete("/api/usuarios/:id", controller.deletarUsuario);
} 