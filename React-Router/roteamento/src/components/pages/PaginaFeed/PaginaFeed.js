import { Post } from "./Post/Post";

export function PaginaFeed(){

    // Variável contendo as informações dos posts
    let infoPosts = {
        posts: [
            {
                id: 1,
                nomeUsuario: "João",
                texto: "Menino, tá quente demais hoje",
                qtdLikes: 10,
            },
            {
                id: 2,
                nomeUsuario: "Tiago",
                texto: "Num aguento mais essa quentura",
                qtdLikes: 3,
            },
            {
                id: 3,
                nomeUsuario: "João",
                texto: "Menino, tá quente demais hoje",
                qtdLikes: 9,
            },
            {
                id: 4,
                nomeUsuario: "Tiago",
                texto: "Num aguento mais essa quentura",
                qtdLikes: 2,
            },            
        ]
    }

    let posts = infoPosts.posts.map(
        (post) => (
            <Post 
                post={post}>
            </Post>
        ));


    return(
        <div className="content">
            {posts}
        </div>
    )
}