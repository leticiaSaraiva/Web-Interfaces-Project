import axios from "axios";

export function inserirPost(token, post){
    return axios({
        method: "POST",
        url: "http://localhost:4000/api/posts",
        headers: {
            "token": token,
        },
        data: {
            "texto": post.texto,
            "likes": 0,
        },
    })
}

export function listarPosts(token){
    return axios({
        method: "GET",
        url: "http://localhost:4000/api/posts",
        headers: {
            "token": token,
        }
    })
}

export function listarComentariosByPost(token, id_post){
    return axios({
        method: "GET",
        url: "http://localhost:4000/api/posts/"+id_post+"/comentarios",
        headers: {
            "token": token,
        }
    })
}