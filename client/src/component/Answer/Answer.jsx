import "./Answer.scss";

const Answer = ({ answer, isActive }) => {
  if (answer == "Noooo God! No God Please No! No! Nooo-") {
    return (
      <div className="answer">
        <iframe
          height="180%"
          src="https://www.youtube.com/embed/31g0YE61PLQ?si=lENSS0r-lVQT4Bih&autoplay=1&controls=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    );
  } else {
    return (
      <div className={`answer answer--${isActive ? "fade" : null}`}>
        <h2
          className={typeof answer == "number" ? "answer__8" : "answer__string"}
        >
          {answer}
        </h2>
      </div>
    );
  }
};
export default Answer;
