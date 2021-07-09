import GoogleMapReact from "google-map-react";
import { Marker } from "../Marker/Marker";
import "./Map.css";

export const Map = ({ zoom, center, wildfireEvents }) => {
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
              />
            );
          }

          return null;
        })}
      </GoogleMapReact>
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
