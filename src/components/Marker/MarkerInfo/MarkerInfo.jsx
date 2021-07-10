import "./MarkerInfo.css";

export const MarkerInfo = ({ id, title, setMarkerInfo }) => {
  return (
    <div className="markerInfo">
      <div className="markerInfo__header">
        <h2>Event Marker</h2>
        <span onClick={() => setMarkerInfo(null)}>&times;</span>
      </div>

      <p>ID: {id}</p>
      <p>Location: {title}</p>
    </div>
  );
};
