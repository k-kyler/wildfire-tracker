import "./MarkerInfo.css";

export const MarkerInfo = ({ id, title }) => {
  return (
    <div className="markerInfo">
      <h2>Marker Location - {id}</h2>
      <p>{title}</p>
    </div>
  );
};
