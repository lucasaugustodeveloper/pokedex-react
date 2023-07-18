import { useEffect } from 'react'
import { useGetAllPokemonsQuery } from '../../store/services/pokemon'

function App() {
  const { data } = useGetAllPokemonsQuery()

  useEffect(() => {
    console.log('data =>', data)
  }, [data])
  

  return (
    <h1 className="text-3xl font-bold underline text-red-500">
      Hello World!!!
    </h1>
  )
}

export default App
