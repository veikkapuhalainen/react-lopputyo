import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Feedback({ points }) {
  return (
    <>
      <h1>Tuloksesi:</h1>
      <div className="feedback-page" style={{ width: 170, height: 170 }}>
        <CircularProgressbar
          maxValue={10}
          value={points}
          text={`${points}/10`}
          styles={buildStyles({
            textColor: "#E43F5A",
            pathColor: "#E43F5A",
            trailColor: "#1D223B",
            textSize: "16px",
            strokeLinecap: "butt",
          })}
        />
      </div>
    </>
  );
}

export default Feedback;
