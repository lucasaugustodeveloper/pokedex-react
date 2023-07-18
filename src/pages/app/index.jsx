import { useEffect } from 'react'
import { useGetAllPokemonsQuery } from '../../store/services/pokemon'

import Header from '../../components/header'

function App() {
  const { data } = useGetAllPokemonsQuery()

  useEffect(() => {
    console.log('data =>', data)
  }, [data])
  

  return (
    <div className="container mx-auto">
      <Header />
    </div>
  )
}

export default App
