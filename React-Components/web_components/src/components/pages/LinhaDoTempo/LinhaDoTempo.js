import { Post } from "../Post/Post";
import "./LinhaDoTempo.css";

export function LinhaDoTempo(){

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
            {
                id: 5,
                nomeUsuario: "João",
                texto: "Menino, tá quente demais hoje",
                qtdLikes: 6,
            },
            {
                id: 6,
                nomeUsuario: "Tiago",
                texto: "Num aguento mais essa quentura",
                qtdLikes: 3,
            },
            {
                id: 7,
                nomeUsuario: "João",
                texto: "Menino, tá quente demais hoje",
                qtdLikes: 4,
            },
            {
                id: 8,
                nomeUsuario: "Tiago",
                texto: "Num aguento mais essa quentura",
                qtdLikes: 7,
            },
            
        ]
    }

    // Aqui é gerada uma lista de posts a partir do componente Post 
    // e as informações são passadas via props
    let posts = infoPosts.posts.map(
        (post) => (
            <Post 
                nome={post.nomeUsuario} 
                mensagem={post.texto} 
                likes={post.qtdLikes}>
            </Post>
        ));

    return(
        // Todos os posts ficaram dentro de uma div
        <div className="linha-do-tempo">
            {posts}
        </div>
    )
}