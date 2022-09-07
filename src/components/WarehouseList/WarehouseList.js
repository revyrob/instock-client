import "./WarehouseList.scss";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import Warehouse from "../Warehouse/Warehouse";
import WarehouseTablet from "../WarehouseTablet/WarehouseTablet";

function WarehouseList() {
  return (
    <section className="warehouseList">
      <div className="warehouseList__header">
        <h1 className="warehouseList__title">Warehouses</h1>
        <div className="warehouseList__btns">
          <SearchBar className="warehouseList__search" name="search" />
          <Button
            className="warehouseList__btn"
            alt="add"
            text="+Add New Warehouse"
            type="submit"
          ></Button>
        </div>
      </div>

      <div className="warehouseList__warehouses">
        <div className="warehouseList__mobile">
          <Warehouse />
        </div>

        <div className="warehouseList__tablet">
          <div className="warehouseList__wrapper">
            <h2 className="warehouseList__subtitle">WarehouseList</h2>

            <h2 className="warehouseList__subtitle">Address</h2>

            <h2 className="warehouseList__subtitle">Contact Name</h2>

            <h2 className="warehouseList__subtitle">Contact Information</h2>

            <h2 className="warehouseList__subtitle align-right">Action</h2>
          </div>
          <WarehouseTablet />
        </div>
      </div>
    </section>
  );
}
export default WarehouseList;
