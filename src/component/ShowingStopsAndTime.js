import { useEffect, useState } from "react";
import { fetchBusStopData } from "../fetchFunction";

function ShowingStopsAndTime({ choosedRoute }) {
  const [busStopData, setBusStopData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchBusStopData(
        choosedRoute.route,
        choosedRoute.bound === "I" ? "inbound" : "outbound",
        choosedRoute.service_type
      );
      setBusStopData(data);
    };
    fetch();
  }, [choosedRoute]);

  if (!choosedRoute.route) return null;

  return (
    <div className="allDataContainer">
      <div className="routeInfo">{`${choosedRoute.route} - ${choosedRoute.orig_tc} to ${choosedRoute.dest_tc}`}</div>
      <div className="busDataContainer">
        {busStopData.map((busStop, index) => {
          return (
            <div className="buses" key={index}>
              <div>{`${index + 1}. ` + busStop[0].name}</div>
              <div className="firstBus">
                <div className="busTime">
                  {!busStop[0].time ? "No Bus Is Available" : busStop[0].time}
                </div>
                <div className="busTrips">
                  {!busStop[0].trips ? "" : busStop[0].trips}
                </div>
              </div>
              <div className="secondBus">
                <div className="busTime">
                  {!busStop[1].time ? "No Bus Is Available" : busStop[1].time}
                </div>
                <div className="busTrips">
                  {!busStop[1].trips ? "" : busStop[1].trips}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowingStopsAndTime;
