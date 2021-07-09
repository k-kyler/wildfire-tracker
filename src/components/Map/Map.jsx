import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { Marker } from "../Marker/Marker";
import { MarkerInfo } from "../Marker/MarkerInfo/MarkerInfo";
import "./Map.css";

export const Map = ({ zoom, center, wildfireEvents }) => {
  const [markerInfo, setMarkerInfo] = useState(null);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {wildfireEvents.map((event) => {
          if (event.categories[0].id === 8) {
            // Wildfire event id is 8
            return (
              <Marker
                key={event.id}
                lat={event.geometries[0].coordinates[1]}
                lng={event.geometries[0].coordinates[0]}
                clickHandler={() => setMarkerInfo(markerInfoObject)}
              />
            );
          }

          return null;
        })}
      </GoogleMapReact>

      {markerInfo && <MarkerInfo {...markerInfo} />}
    </div>
  );
};

Map.defaultProps = {
  zoom: 4,
  center: {
    lat: 57.288843,
    lng: -101.456857,
  },
};
