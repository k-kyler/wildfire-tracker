import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Loading } from "./components/Loading/Loading";
import { Map } from "./components/Map/Map";
import "./App.css";

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
    <div className="app">
      <Header />
      {isLoading ? <Loading /> : <Map wildfireEvents={wildfireEvents} />}
    </div>
  );
}

export default App;
