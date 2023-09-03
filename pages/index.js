import Pokemon from "@/components/Pokemon"
export default function Pokemones({pokemones}) {
  
  return (
    <div>
      <p>Mi App de Pokemones</p>
      <ul>
        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return {
    props: { pokemones: data.results}
  }
}