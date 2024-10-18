function SearchBar({ search, setSearch, setChoosedRoute }) {
  function handleSearch(ev) {
    setSearch(ev.target.value.toUpperCase().replace(/[^a-zA-Z0-9]/g, ""));
    setChoosedRoute({});
  }

  const timeNow = new Date().toLocaleTimeString();

  return (
    <>
      <div className="logoTimeContainer">
        <div className="lastUpdateTime">
          last update time:
          {`${timeNow.slice(0, 7)}${timeNow.slice(7, 9) > 30 ? "30" : "00"}`}
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/b/b4/KowloonMotorBus.svg"
          className="logo"
          alt="KMB logo"
        />
        <div>current time:{timeNow}</div>
      </div>
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
