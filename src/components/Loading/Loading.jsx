import LoadingGif from "../../assets/loadingImage.gif";
import "./Loading.css";

export const Loading = () => {
  return (
    <div className="loading">
      <img src={LoadingGif} alt="Loading..." />
      <h2>Loading Wildfire Events...</h2>
    </div>
  );
};
