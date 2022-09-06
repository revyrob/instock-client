import "./Button.scss";

//general button function that has an icon on the left and text in the center
function Button({ icon, alt, text, className, type, makeHappen }) {
  return (
    <button className={className} type={type} onClick={makeHappen || null}>
      <img src={icon} className="button-icon" alt={alt} />
      <span className="button-text">{text}</span>
    </button>
  );
}
export default Button;
