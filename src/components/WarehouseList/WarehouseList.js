import "./WarehouseList.scss";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import Warehouse from "../Warehouse/Warehouse";
import WarehouseTablet from "../WarehouseTablet/WarehouseTablet";
import arrowSort from "../../assets/icons/sort-24px.svg";

function WarehouseList({ warehouseList }) {
  return (
    <section className="warehouseList">
      <div className="warehouseList__header">
        <h1 className="warehouseList__title">Warehouses</h1>
        <div className="warehouseList__btns">
          <SearchBar className="warehouseList__search" />
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
          {warehouseList &&
            warehouseList.map((warehouse) => (
              <Warehouse
                id={warehouse.id}
                key={warehouse.id}
                warehouse={warehouse.name}
                address={warehouse.address}
                city={warehouse.city}
                country={warehouse.country}
                contact={warehouse.contact.name}
                contactEmail={warehouse.contact.email}
                contactPhone={warehouse.contact.phone}
              />
            ))}
        </div>

        <div className="warehouseList__tablet">
          <div className="warehouseList__wrapper">
            <h2 className="warehouseList__subtitle">
              WarehouseList
              <img
                className="warehouseList__subtitle--icon"
                src={arrowSort}
                alt="arrrow sorts"
              />
            </h2>

            <h2 className="warehouseList__subtitle">
              Address
              <img
                className="warehouseList__subtitle--icon"
                src={arrowSort}
                alt="arrrow sorts"
              />
            </h2>

            <h2 className="warehouseList__subtitle">
              Contact Name
              <img
                className="warehouseList__subtitle--icon"
                src={arrowSort}
                alt="arrrow sorts"
              />
            </h2>

            <h2 className="warehouseList__subtitle">
              Contact Information
              <img
                className="warehouseList__subtitle--icon"
                src={arrowSort}
                alt="arrrow sorts"
              />
            </h2>

            <h2 className="warehouseList__subtitle align-right">Action</h2>
          </div>

          {warehouseList &&
            warehouseList.map((warehouse) => (
              <WarehouseTablet
                id={warehouse.id}
                key={warehouse.id}
                warehouse={warehouse.name}
                address={warehouse.address}
                city={warehouse.city}
                country={warehouse.country}
                contact={warehouse.contact.name}
                contactEmail={warehouse.contact.email}
                contactPhone={warehouse.contact.phone}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
export default WarehouseList;
