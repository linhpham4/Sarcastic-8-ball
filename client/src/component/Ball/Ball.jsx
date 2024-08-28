import "./Ball.scss";
import Answer from "../Answer/Answer";

const Ball = ({ answer, isActive }) => {
  return (
    <div className={`ball ball--${isActive ? "shake" : null}`}>
      <Answer answer={answer} isActive={isActive}/>
    </div>
  );
};

export default Ball;
