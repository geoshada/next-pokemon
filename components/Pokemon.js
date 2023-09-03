import Link from "next/link"

const Pokemon = ({pokemon})=>{
    let id= pokemon.url.split("/").filter(x => x).pop()
    return (
        <li><Link href={`/pokemones/${id}`} >{pokemon.name}</Link></li>
    )
}

export default Pokemon