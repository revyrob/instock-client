import "./WarehouseList.scss";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
// import Warehouse from "../Warehouse/Warehouse";

function WarehouseList() {
  return (
    <section className="warehouse">
      <div className="warehouse__header">
        <h1 className="warehouse__title">Warehouses</h1>
        <SearchBar
          className="warehouse__search"
          placeholder="Search"
          name="search"
        />
        <Button
          className="warehouse__btn"
          alt="add"
          text="+Add New Warehouse"
          type="submit"
        ></Button>
      </div>
      {/* add each warehouse from the warehouse comment and loop through
      the json of warehouses */}
      <div className="warehouse__list">{/* <Warehouse /> */}</div>
    </section>
  );
}
export default WarehouseList;
