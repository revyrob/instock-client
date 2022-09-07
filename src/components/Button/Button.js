import "./Button.scss";

//general button function that has an icon on the left and text in the center
function Button({ text, className, type, makeHappen }) {
  return (
    <button className={className} type={type} onClick={makeHappen || null}>
      <span className="button-text">{text}</span>
    </button>
  );
}
export default Button;
