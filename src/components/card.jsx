/* eslint-disable react/prop-types */
function Card({ name, types, image }) {
  return (
    <div className="card-pokemon">
      <div>
        <p className="text-5xl font-bold text-stone-700">{name}</p>

        <ul className='mt-2'>
          {types.map((type, index) => (
            <li
              className={`stat ${index % 2 !== 0 ? 'mt-1' : ''}`}
              key={type}
            >
                {type}
            </li>
          ))}
        </ul>
      </div>

      <div className="card-pokemon-image">
        <img
          className='object-contain w-36 h-36 relative z-50'
          src={image}
          alt="Bulbasaur"
        />
      </div>
    </div>
  )
}

export default Card
