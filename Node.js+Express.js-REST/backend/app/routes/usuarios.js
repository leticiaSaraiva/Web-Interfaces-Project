const controller = require("../controllers/usuarios");

module.exports = function(app){
    // POST Usuario
    app.post("/api/usuarios", controller.inserirUsuario);

    // GET Usuarios
    app.get("/api/usuarios", controller.listarUsuarios);

    // GET Usuario by Id
    app.get("/api/usuarios/:id", controller.buscarUsuarioById);

    // DELETE Usuario
    app.delete("/api/usuarios/:id", controller.deletarUsuario);
}