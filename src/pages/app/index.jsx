import { useState, useEffect } from 'react'
import { useGetAllPokemonsQuery } from '../../store/services/pokemon'

import Header from '../../components/header'
import Search from '../../components/search'
import Card from '../../components/card'

function App() {
  const { data, isLoading } = useGetAllPokemonsQuery()

  const [search, setSearch] = useState('')
  const [pokemons, setPokemons] = useState(data ?? [])

  const handleSearch = (e) => {
    e.preventDefault()
    const pokemon = e.target.value;

    const filteredPokemons = pokemons.filter(({ name }) =>
      name.toLowerCase()
        .indexOf(pokemon.toLowerCase()) === 0
    )

    console.log('filteredPokemons =>', filteredPokemons)

    setSearch(e.target.value)
    
    if (!pokemon) {
      setPokemons(data)
      return false
    }

    setPokemons(filteredPokemons)
  }

  useEffect(() => {
    if (data) {
      setPokemons(data)
    }
  }, [data])

  return (
    <div className="container mx-auto">
      <Header />
      <Search name={search} handleChange={handleSearch} />

      {(isLoading || !pokemons.length) ? (
        <div className="shapes mt-24 mx-auto" />
      ) : (
        <div className="container-pokemons">
          {pokemons.map(pokemon => (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              types={pokemon.types}
              image={pokemon.image}
            />
          )
          )}
        </div>
      )}

    </div>
  )
}

export default App
