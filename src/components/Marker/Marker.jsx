import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire";
import "./Marker.css";

export const Marker = ({ lat, lng, clickHandler }) => {
  return (
    <div className="marker" onClick={clickHandler && clickHandler}>
      <Icon className="marker__icon" icon={FireIcon} />
    </div>
  );
};
