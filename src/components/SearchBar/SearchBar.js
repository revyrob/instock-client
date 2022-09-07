import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

function SearchBar({ placeholder, name, className }) {
  return (
    <div className={className}>
      <img className="inputBar__icon" src={searchIcon} alt="search icon" />
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
