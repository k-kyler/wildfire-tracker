import { useState, useEffect } from "react";
import { Loading } from "./components/Loading/Loading";
import { Map } from "./components/Map/Map";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [wildfireEvents, setWildfireEvents] = useState([]);

  const API_URL = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events";

  const getWildfireEventsHandler = async () => {
    try {
      const { events } = await (await fetch(API_URL)).json();

      if (events && events.length) {
        setWildfireEvents(events);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWildfireEventsHandler();
  }, []);

  return (
    <>{isLoading ? <Loading /> : <Map wildfireEvents={wildfireEvents} />}</>
  );
}

export default App;
