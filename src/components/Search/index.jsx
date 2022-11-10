import { StyledSearch } from "./style";

export function Search({ valorDoFiltro, setValorDoFiltro }) {

    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;

    return (
        <StyledSearch>
            <input type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
            <button>
                🔎
            </button>
        </StyledSearch>
    )
}