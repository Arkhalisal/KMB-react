import "./App.css";
import { useEffect, useState } from "react";
import { fetchAllLineData } from "./fetchFunction";
import SearchBar from "./component/SearchBar";
import ChoosingRoute from "./component/ChoosingRoute";
import ShowingStopsAndTime from "./component/ShowingStopsAndTime";

function App() {
  const [allLineData, setAllLineData] = useState([]);
  const [search, setSearch] = useState("");
  const [choosedRoute, setChoosedRoute] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchAllLineData();
      setAllLineData(data);
    };
    fetch();
  }, []);

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setChoosedRoute={setChoosedRoute}
      />
      <ChoosingRoute
        allLineData={allLineData}
        enteredRoute={search}
        setChoosedRoute={setChoosedRoute}
      />
      <ShowingStopsAndTime choosedRoute={choosedRoute} />
    </>
  );
}

export default App;
