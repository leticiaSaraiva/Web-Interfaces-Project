import { Navegador } from "../../commons/Navegador/Navegador";
import { FormPostar } from "./FormPostar/FormPostar";

// Componente PaginaPostar
export function PaginaPostar(){
    return (
        <div>
            <Navegador></Navegador>
            <FormPostar></FormPostar>
        </div>
    );
}