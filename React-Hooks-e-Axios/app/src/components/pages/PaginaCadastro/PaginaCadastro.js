import { Navegador } from "../../commons/Navegador/Navegador";
import { FormCadastro } from "./FormCadastro/FormCadastro";

export function PaginaCadastro(){
    return (
        <div>
            <Navegador></Navegador>
            <FormCadastro></FormCadastro>
        </div>
    )
}