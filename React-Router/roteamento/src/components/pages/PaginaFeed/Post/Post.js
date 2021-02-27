import "./Post.css";

export function Post({post}){
    return (
        <div className="postagens">
            <div className="posts">
                <h5 className="post-nome"> {post.nomeUsuario} </h5>
                <span className="post-mensagem"> {post.texto} </span>
                <div className="div-likes">
                    <p className="post-likes"> {post.qtdLikes} likes</p>
                    <div className="button-curtir">
                        <p>Curtir</p>
                    </div>
                </div>
            </div>
            <div className="comentarios">
                <h5 className="comentario-nome"> Joana </h5>
                <span className="comentario-texto">Tá demais viu!</span>
                <hr/>

                <h5 className="comentario-nome"> Paulo </h5>
                <span className="comentario-texto">Nem me diga!</span>
                <hr/>

                <div className="add-comentario">
                    <textarea placeholder="Escreva seu comentário"></textarea>
                    <div className="button-comentar">Comentar</div>
                </div>
            </div>
        </div>
        
    )
}