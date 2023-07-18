import pokemon from '../assets/background/bulbasaur.png'

function Card() {
  return (
    <div className="card-pokemon">
      <div>
        <p className="text-5xl font-bold text-stone-700">Bulbasaur</p>

        <ul className='mt-2'>
          <li className='stat'>Poison</li>
          <li className='stat mt-1'>Grass</li>
        </ul>
      </div>

      <div className="card-pokemon-image">
        <img
          className='object-cover w-36 h-36 relative z-50'
          src={pokemon}
          alt="Bulbasaur"
        />
      </div>

    </div>
  )
}

export default Card
