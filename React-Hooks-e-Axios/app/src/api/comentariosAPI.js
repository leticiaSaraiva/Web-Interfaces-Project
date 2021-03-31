import axios from "axios";

export function inserirComentario(token, comentario, id_post){
    return axios({
        method: "POST",
        url: "http://localhost:4000/api/comentarios",
        headers: {
            "token": token,
        },
        data: {
            "post": id_post,
            "texto": comentario.texto,
        },
    })
}
