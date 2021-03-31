import { useContext, useEffect, useState } from "react";
import { listarPosts } from "../../../api/postsAPI";
import { AuthContext } from "../../../App";
import { Post } from "./Post/Post";

export function PaginaFeed(){

    const {auth} = useContext(AuthContext);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        listarPosts(auth.token)
            .then((response) => {
                console.log(response);
                setPosts(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [auth.token]);


    let posts_ = posts.map(
        (post) => (
            <Post 
                key={post.id}
                id={post.id}
                nome={post.usuario.nome}
                texto={post.texto}
                likes={0}
                >
            </Post>
        ));


    return(
        <div className="content">
            {posts_}
        </div>
    )
}