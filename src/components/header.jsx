import pokedexLogo from '../assets/icons/pokedex-logo.svg'

function Header() {
  return (
    <header className='header'>
      <img
        className='mr-3 w-20 h-20'
        alt="Pokedex Logo"
        src={pokedexLogo}
      />
      Pokedex
    </header>
  )
}

export default Header
