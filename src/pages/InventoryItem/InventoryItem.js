import "./InventoryItem.scss";

import arrowBack from "../../assets/icons/arrow_back-24px.svg";
// import chevron from '../../assets/icons/chevron_right-24px.svg';
// import delteCan from '../../assets/icons/delete_outline-24px.svg';
import editPen from "../../assets/icons/edit-24px.svg";

import axios from "axios";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function WarehouseDetails() {
  const [inventoryItem, setInventoryItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/inventory/${id}`).then((payload) => {
      setInventoryItem(payload.data);
    });
  }, []);
  return (
    <section className="inventoryItem">
      <div className="item-pageHeader">
        <div className="item-pageHeader__title">
          <img src={arrowBack} alt="back icon" />
          <p className="item-pageHeader__itemName">
            {/* {warehouseObj && warehouseObj?.city} */}
            {inventoryItem.itemName}
          </p>
        </div>
        <Link to={`../../inventory/${id}/edit`}>
          <div className="item-pageHeader__editButton">
            <img
              className="item-pageHeader__iconColor"
              src={editPen}
              alt="edit icon"
            />
            <span className="item-pageHeader__iconBtnTxt">Edit</span>
          </div>
        </Link>
      </div>
      <hr class="item-pageHeader__divider"></hr>
      <div class="desktopInventoryItem">
        <div class="desktopItem">
          <div class="desktopItem__boxLeft">
            <label className="desktopItem__label">ITEM DESCRIPTION:</label>{" "}
            <span class="desktopItem__valueDesc">
              {inventoryItem.description}
            </span>
            <label className="desktopItem__label">CATEGORY:</label>{" "}
            <span class="desktopItem__value">{inventoryItem.category}</span>
          </div>
          <div class="desktopItem__boxRight">
            <div class="desktopItem__boxRight-row1">
              <div class="flex-column">
                <label className="desktopItem__labelStatus">STATUS:</label>{" "}
                <span
                  class={`${
                    inventoryItem.status === "In Stock"
                      ? "desktopItem__inStock"
                      : "desktopItem__outOfStock"
                  }`}
                >
                  {inventoryItem.status}
                </span>
              </div>
              <div class="flex-column">
                <label className="desktopItem__label">QUANTITY</label>{" "}
                <span class="desktopItem__value">{inventoryItem.quantity}</span>
              </div>
            </div>
            <div class="desktopItem__boxRight-row2">
              <div class="flex-column">
                <label className="desktopItem__label">WAREHOUSE</label>{" "}
                <span class="desktopItem__value">
                  {inventoryItem.warehouseName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
