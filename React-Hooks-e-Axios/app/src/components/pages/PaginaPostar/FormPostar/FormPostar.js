import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { inserirPost } from '../../../../api/postsAPI';
import { AuthContext } from '../../../../App';
import history from '../../../../history';

// Componente FormPostar
export function FormPostar(){
    const {register, handleSubmit} = useForm();
    const {auth} = useContext(AuthContext);

    const addPost = (post) => {
        inserirPost(auth.token, post)
            .then((response) => {
                console.log(response);
                history.push("/");
            }).catch((error) => {
                console.log(error);
            })
    }

    const onSubmit = (post) => {addPost(post)};

    return (
        <div className="content">
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea className="form-post" 
                        name="texto" 
                        ref={register}
                        placeholder="Escreva sua mensagem">
                </textarea> 
                <br/>
                <button>Postar</button>
            </form>
        </div> 
    );
}