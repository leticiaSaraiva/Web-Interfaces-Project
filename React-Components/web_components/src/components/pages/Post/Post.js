import iconeLike from "../../../img/like.png";
import "./Post.css";

// O componente Post recebe as informações via props,
// então é possível acessar cada um dos parâmetros que foram passados (em LinhaDoTempo)
// como nome, mensagem e likes, precisando passar apenas props.nome, e assim sucessivamente.

// Para mostrar essas informações na tela é preciso passar a informação entre chaves {}
// {props.nome}
export function Post(props){
    return (
        <div className="posts">
            <h5 className="post-nome"> {props.nome} </h5>
            <span className="post-mensagem"> {props.mensagem} </span>
            <div className="div-likes">
                <p className="post-likes"> {props.likes} likes</p>
                <div className="button-curtir">
                    <p>Curtir</p>
                </div>
            </div>
        </div>
    )
}