import { useForm } from "react-hook-form";
import { cadastrar } from "../../../../api/auth";
import history from "../../../../history";

export function FormCadastro(){
    const {register, handleSubmit} = useForm();

    const submeter = (usuario) => {
        cadastrar(usuario)
            .then((response) => {
                console.log(response);
                history.push("/login");
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="content">
            <form onSubmit={handleSubmit(submeter)}>
                Nome: <input type="text" name="nome" ref={register} /> <br/>
                E-mail: <input type="text" name="email" ref={register} /> <br/>
                Senha: <input type="password" name="senha" ref={register}/> <br/>
                <button>Cadastrar</button>
            </form>
        </div>
    )
}