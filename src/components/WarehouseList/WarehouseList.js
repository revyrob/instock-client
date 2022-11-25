import "./WarehouseList.scss";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import WarehouseMobile from "../WarehouseMobile/WarehouseMobile";
import WarehouseTablet from "../WarehouseTablet/WarehouseTablet";
import arrowSort from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";

function WarehouseList({ warehouseList }) {
  return (
    <section className="warehouseList">
      <div className="warehouseList__header">
        <h1 className="warehouseList__title">Warehouses</h1>
        <div className="warehouseList__btns">
          <SearchBar className="warehouseList__search" />
          <Link to={`/warehouses/new`}>
            <Button
              className="warehouseList__btn"
              alt="add"
              text="+ Add New Warehouse"
              type="submit"
            ></Button>
          </Link>
        </div>
      </div>

      <div className="warehouseList__warehouses">
        <div className="warehouseList__mobile">
          {warehouseList &&
            warehouseList.map((warehouse) => (
              <WarehouseMobile
                id={warehouse.id}
                key={warehouse.id}
                warehouse={warehouse.warehouse_name}
                address={warehouse.address}
                city={warehouse.city}
                country={warehouse.country}
                contact={warehouse.contact_name}
                contactEmail={warehouse.contact_email}
                contactPhone={warehouse.contact_phone}
              />
            ))}
        </div>

        <div className="warehouseList__tablet">
          <div className="warehouseList__wrapper">
            <h2 className="warehouseList__subtitle">
              Warehouse
              <img
                className="warehouseList__subtitle--icon"
                src={arrowSort}
                alt="arrrow sorts"
              />
            </h2>

            <h2 className="warehouseList__subtitle indent">
              Address
              <img
                className="warehouseList__subtitle--icon"
                src={arrowSort}
                alt="arrrow sorts"
              />
            </h2>

            <h2 className="warehouseList__subtitle indent">
              Contact Name
              <img
                className="warehouseList__subtitle--icon"
                src={arrowSort}
                alt="arrrow sorts"
              />
            </h2>

            <h2 className="warehouseList__subtitle indent">
              Contact Information
              <img
                className="warehouseList__subtitle--icon"
                src={arrowSort}
                alt="arrrow sorts"
              />
            </h2>

            <h2 className="warehouseList__subtitle align-right">Actions</h2>
          </div>

          {warehouseList &&
            warehouseList.map((warehouse) => (
              <WarehouseTablet
                id={warehouse.id}
                key={warehouse.id}
                warehouse={warehouse.warehouse_name}
                address={warehouse.address}
                city={warehouse.city}
                country={warehouse.country}
                contact={warehouse.contact_name}
                contactEmail={warehouse.contact_email}
                contactPhone={warehouse.contact_phone}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
export default WarehouseList;
