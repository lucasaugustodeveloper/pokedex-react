import { useEffect } from 'react'
import { useGetAllPokemonsQuery } from '../../store/services/pokemon'

import Header from '../../components/header'
import Search from '../../components/search'
import Card from '../../components/card'

function App() {
  const { data, isLoading } = useGetAllPokemonsQuery()

  useEffect(() => {
    console.log('data =>', data)
  }, [data])
  

  return (
    <div className="container mx-auto">
      <Header />
      <Search />

      {isLoading ? (
        <div className="shapes" />
      ) : (
        <div className="container-pokemons">
          {data.map(pokemon => (
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
