import { Navegador } from "../../commons/Navegador/Navegador";
import { FormLogin } from "./FormLogin/FormLogin";

export function PaginaLogin(){
    return (
        <div>
            <Navegador></Navegador>
            <FormLogin></FormLogin>
        </div>
    )
}