import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";

export const Toggle = () => {
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div className="t-button"></div>
    </div>
  );
};
