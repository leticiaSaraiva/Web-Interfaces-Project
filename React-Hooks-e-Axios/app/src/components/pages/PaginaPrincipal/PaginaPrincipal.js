import { Navegador } from "../../commons/Navegador/Navegador";
import { PaginaFeed } from "../PaginaFeed/PaginaFeed";


export function PaginaPrincipal(){
    return (
        <div>
            <Navegador></Navegador>
            <PaginaFeed></PaginaFeed>
        </div>
    )
}