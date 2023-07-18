import { useEffect } from 'react'
import { useGetAllPokemonsQuery } from '../../store/services/pokemon'

import Header from '../../components/header'
import Search from '../../components/search'
import Card from '../../components/card'

function App() {
  const { data } = useGetAllPokemonsQuery()

  useEffect(() => {
    console.log('data =>', data)
  }, [data])
  

  return (
    <div className="container mx-auto">
      <Header />
      <Search />

      <div className="container-pokemons">
        <Card />
      </div>

    </div>
  )
}

export default App
