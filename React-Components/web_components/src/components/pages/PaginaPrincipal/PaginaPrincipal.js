import { Navegador } from "../../commons/Navegador/Navegador";
import { LinhaDoTempo } from "../LinhaDoTempo/LinhaDoTempo";


export function PaginaPrincipal(){
    return (
        <div>
            <Navegador></Navegador>
            <LinhaDoTempo></LinhaDoTempo>
        </div>
    )
}