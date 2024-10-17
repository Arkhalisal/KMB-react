function SearchBar({ search, setSearch }) {
  function handleSearch(ev) {
    setSearch(ev.target.value.toUpperCase().replace(/[^a-zA-Z0-9]/g, ""));
  }

  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/b/b4/KowloonMotorBus.svg"
        className="logo"
        alt="KMB logo"
      />
      <form className="inputContainer">
        <input
          type="text"
          placeholder="please enter bus route"
          value={search}
          onChange={handleSearch}
          className="input"
        ></input>
      </form>
    </>
  );
}

export default SearchBar;
