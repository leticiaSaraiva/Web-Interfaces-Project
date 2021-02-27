import history from '../../../../history';

// Componente FormPostar
export function FormPostar(){

    function postar(){
        history.push("/");
    }

    return (
        <div className="content">
            <textarea className="form-post" placeholder="Escreva sua mensagem"></textarea>

            <div className="div-botao-postar">
                <div className="button-postar" onClick={postar}>
                    <p>Enviar</p>
                </div>
            </div>
        </div> 
    );
}