import { useState } from "react";

function ChoosingRoute({ allLineData, enteredRoute, setChoosedRoute }) {
  const [selectedRoute, setSelectedRoute] = useState(null);

  if (!enteredRoute) return null;
  const searchedRoute = allLineData.filter((line) =>
    line.route.includes(enteredRoute)
  );

  function handleEnteredRoute(route, index) {
    setChoosedRoute(route);
    setSelectedRoute(index);
  }

  return (
    <div className="routeContainer">
      {searchedRoute.length === 0 ? (
        <div>please enter correct bus info</div>
      ) : (
        searchedRoute.map((x, index) => {
          const isSelected = selectedRoute === index;

          return (
            <div
              key={x}
              className={`routes ${isSelected ? "selected" : ""}`}
              onClick={() => handleEnteredRoute(x, index)}
            >{`${x.route} ${x.orig_tc} to ${x.dest_tc}`}</div>
          );
        })
      )}
    </div>
  );
}

export default ChoosingRoute;
