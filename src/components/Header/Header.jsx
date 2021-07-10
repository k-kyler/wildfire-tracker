import "./Header.css";
import HeaderLogo from "../../assets/wildfire.svg";

export const Header = () => {
  return (
    <div className="header">
      <img src={HeaderLogo} alt="Wildfire" />
      <h1>Tracking Natural Wildfire Events</h1>
    </div>
  );
};
