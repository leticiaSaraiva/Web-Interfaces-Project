import axios from "axios";

export function login(login_data){
    return axios({
        method: "POST",
        url: "http://localhost:4000/api/usuarios/signin",
        data: login_data,
    })
}

export function cadastrar(usuario){
    return axios({
        method: "POST",
        url: "http://localhost:4000/api/usuarios",
        data: usuario,
    })
}