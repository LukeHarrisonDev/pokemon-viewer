import PokemonCard from "./PokemonCard"
import PokemonSearch from "./PokemonSearch"

function PokemonProvider() {
    return (
        <>
            <h2>PokeProvider</h2>
            <PokemonSearch/>
            <PokemonCard/>
        </>
    )
}

export default PokemonProvider