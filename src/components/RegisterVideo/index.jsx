import { useState } from "react";
import { StyledRegisterVideo } from "./style";

function useForm(props) {
    const [values, setValues] = useState(props.initialValues);

    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name
            setValues({ 
                ...values,
                [name]: value })
        }
    };
}

export function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: {titulo: "", url: ""}
    });
    const [formVisivel, setFormVisivel] = useState(false);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>+</button>
            {formVisivel ? (
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <button className="close-modal" onClick={() => setFormVisivel(true)}>X</button>
                        <input
                            type="text"
                            placeholder="Título do vídeo"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                            />

                        <input 
                            type="text" 
                            placeholder="URL"
                            name="url"
                            value={formCadastro.values.url}
                             onChange={formCadastro.handleChange}
                             />
                             
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            ) : null}

        </StyledRegisterVideo>
    )
}