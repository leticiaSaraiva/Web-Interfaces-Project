const controller = require("../controllers/posts");

module.exports = function(app){
    // POST Post
    app.post("/api/posts", controller.inserirPost);

    // GET Post
    app.get("/api/posts", controller.listarPosts);

    // GET Post by Id
    app.get("/api/posts/:id", controller.buscarPostById);

    // DELETE Post
    app.delete("/api/posts/:id", controller.deletarPost);
}