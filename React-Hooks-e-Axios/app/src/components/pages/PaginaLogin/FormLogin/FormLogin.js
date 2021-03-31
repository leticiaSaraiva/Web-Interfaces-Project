import { useContext } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../../../api/auth";
import { AuthContext } from "../../../../App";
import history from "../../../../history";

export function FormLogin(){
    const {register, handleSubmit} = useForm();
    
    const auth = useContext(AuthContext);
    
    const submeter = (login_data)=>{
        login(login_data).then((response)=>{
            console.log(response);
            auth.setAuth({token: response.data.token, nome: response.data.nome});
            history.push("/");
        }).catch((error)=>{
            console.log(error);
        })
    };

    return(
        <div className="content">
            <form onSubmit={handleSubmit(submeter)}> 
                E-mail: <input type="text" name="email" ref={register}/> <br/>
                Senha: <input type="password" name="senha" ref={register}/> <br/>
                <button>Login</button>
            </form>
        </div>
    )
}