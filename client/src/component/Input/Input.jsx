import "./Input.scss";

const Input = ({ handleSubmit, toggleClass }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        className="form__textarea"
        type="text"
        name="question"
        id="textarea"
        placeholder="Ask any question"
        rows="1"
        column="10"
      ></textarea>
      <button className="form__button" onClick={toggleClass}>Ask</button>
    </form>
  );
};

export default Input;
