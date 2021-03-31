import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { inserirComentario } from "../../../../api/comentariosAPI";
import { listarComentariosByPost } from "../../../../api/postsAPI";
import { AuthContext } from "../../../../App";
import "./Post.css";

function FormComentario({submeter}){
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (comentario) => {
        submeter(comentario);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="add-comentario">
            <textarea name="texto" ref={register} placeholder="Escreva seu comentário"></textarea>
            <button className="button-comentar">Comentar</button>
        </form>
    )
}

function ListarComentarios(props){
    return(
        <div>
            <h5 className="comentario-nome"> {props.nome} </h5>
            <div className="comentario-texto"> <p>{props.texto}</p> </div>
            <hr/>
        </div>   
    )
}

export function Post(props){
    
    const {auth} = useContext(AuthContext);

    const [count, setCount] = useState(0);
    const [comentarios, setComentarios] = useState([]);

    const atualizarComentarios = () => {
        listarComentariosByPost(auth.token, props.id)
        .then((response)=>{
            console.log(response);
            setComentarios(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        atualizarComentarios();
        // Para desativar o warning React Hook useEffect has a missing dependency
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addComentario = (comentario) => {
        inserirComentario(auth.token, comentario, props.id)
            .then((response) => {
                console.log(response);
                atualizarComentarios();
            }).catch((error) => {
                console.log(error);
            });
    }

    const clickLike = () => {
        setCount(count+1);
    }

    const comentarios_ = comentarios.map((comentario) => (
        <ListarComentarios
            key={comentario.id}
            id={comentario.id}
            nome={comentario.usuario.nome}
            texto={comentario.texto}
            >
        </ListarComentarios>
    ))
    
    return (
        <div className="postagens">
            <div className="posts">
                <h5 className="post-nome"> {props.nome} </h5>
                <span className="post-mensagem"> {props.texto} </span>
                <div className="div-likes">
                    <p className="post-likes"> {count} likes</p>
                    <button className="button-curtir" onClick={clickLike}>
                        Curtir
                    </button>
                </div>
            </div>
            <div className="comentarios">
                {comentarios_}
                <FormComentario submeter={addComentario}></FormComentario>
            </div>
        </div>
        
    )
}