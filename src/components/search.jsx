function Search({ name, handleChange }) {
  return (
    <form className="text-lg mt-5 w-100 mx-auto">
      <label htmlFor="search">
        <input
          className="text-black rounded-lg p-2 w-full outline-none"
          type="text"
          placeholder="Enter name pokemon"
          onChange={handleChange}
          value={name}
        />
      </label>
    </form>
  )
}

export default Search;
