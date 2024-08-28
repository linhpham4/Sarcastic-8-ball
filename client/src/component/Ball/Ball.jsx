import "./Ball.scss";
import Answer from "../Answer/Answer";

const Ball = ({ answer }) => {
  return (
    <div className="ball">
      <Answer answer={answer} />
    </div>
  );
};

export default Ball;
