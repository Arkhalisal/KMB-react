import moment from "moment";

function SearchBar({ search, setSearch, setChoosedRoute }) {
  function handleSearch(ev) {
    setSearch(ev.target.value.toUpperCase().replace(/[^a-zA-Z0-9]/g, ""));
    setChoosedRoute({});
  }
  const timeNow = moment(new Date()).format("hh:mm:ss a");

  return (
    <>
      <div className="logoTimeContainer">
        <div className="lastUpdateTime">
          last update time:
          {`${timeNow.slice(0, 6)}${
            timeNow.slice(6, 8) > 30 ? "30" : "00"
          } ${timeNow.slice(8, 11)}`}
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
