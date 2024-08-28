import "./Input.scss";

const Input = ({ handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="textarea">
        Ask any question!
      </label>
      <textarea
        className="form__textarea"
        type="text"
        name="question"
        id="textarea"
      ></textarea>
      <button className="form__button">Submit</button>
    </form>
  );
};

export default Input;
