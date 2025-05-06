import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./feedbackCard.css"

function FeedbackCard({ points }) {
  return (
    <>
      <h1>Tuloksesi:</h1>
      <div className="progressbar">
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

export default FeedbackCard;
