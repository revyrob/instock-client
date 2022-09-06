import "./SearchBar.scss";

function SearchBar({ placeholder, icon, alt, name, className }) {
  return (
    <div className={className}>
      <img className="inputBar__icon" src={icon} alt={alt} />
      <input
        type="text"
        className="inputBar__input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}
export default SearchBar;
