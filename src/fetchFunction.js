const generalApi = "https://data.etabus.gov.hk/v1/transport/kmb/";

async function mainFetch(path) {
  try {
    const url = `${generalApi}${path}`;
    const res = await fetch(url);
    const dataFile = await res.json();
    return dataFile.data;
  } catch (err) {
    return null;
  }
}

export const fetchAllLineData = async () => {
  const data = await mainFetch("route");
  return data;
};

export const fetchBusStopData = async (route, direction, service_type) => {
  const nameData = await mainFetch(
    `route-stop/${route}/${direction}/${service_type}`
  );
  const stop_id = nameData.map((busStop) => busStop.stop);
  const timeData = await Promise.all(
    stop_id.map(async (stop_id) => {
      const timeData = await fetchBusStopTime(stop_id, route, service_type);
      return timeData;
    })
  );
  return timeData;
};

const fetchBusStopTime = async (stop_id, route, service_type) => {
  const nameData = await mainFetch(`stop/${stop_id}`);
  const timeData = await mainFetch(`eta/${stop_id}/${route}/${service_type}`);
  const firstBusData = {
    name: nameData.name_tc,
    time: timeData[0]?.eta?.slice(11, 19),
    trips: timeData[0]?.rmk_tc,
  };
  const secondBusData = {
    time: timeData[1]?.eta?.slice(11, 19),
    trips: timeData[1]?.rmk_tc,
  };
  return [firstBusData, secondBusData];
};
