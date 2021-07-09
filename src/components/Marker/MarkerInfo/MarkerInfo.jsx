import "./MarkerInfo.css";

export const MarkerInfo = ({ id, title }) => {
  return (
    <div className="markerInfo">
      <h2>Marker Location</h2>
      <p>ID: {id}</p>
      <p>TITLE: {title}</p>
    </div>
  );
};
