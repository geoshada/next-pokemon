import { useState,useEffect } from "react"
import Pokemon from "@/components/Pokemon"

export default function Pokemones() {
  const [loading,setLoading]=useState(true)
  const [pokemones,setPokemones]=useState([])


  useEffect (()=>{
    const getPokemones= async ()=>{
        const response =await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await response.json()
        setPokemones(data.results)
        setLoading(false)
    }
    getPokemones()
  },[])

  if(loading){
    return(
        <p>Cargando...</p>
    )
  }

  return (
    <div>
      <p data-testid='titulo'>Mi App de Pokemones</p>
      <ul>
        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
      </ul>
    </div>
  )
}

