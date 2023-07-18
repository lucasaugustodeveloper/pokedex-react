function Search() {
  return (
    <form className="text-lg mt-5 w-100 mx-auto">
      <label htmlFor="search">
        <input
          className="rounded-lg p-2 w-full"
          type="text"
          placeholder="Enter name pokemon"
        />
      </label>
    </form>
  )
}

export default Search;
