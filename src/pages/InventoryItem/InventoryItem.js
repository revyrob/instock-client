import './InventoryItem.scss';

import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import editPen from '../../assets/icons/edit-24px.svg';

import axios from 'axios';

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

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
          <Link to={`../../inventory`}>
            <img src={arrowBack} alt="back icon" />
          </Link>
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
      <hr className="item-pageHeader__divider"></hr>
      <div className="desktopInventoryItem">
        <div className="desktopItem">
          <div className="desktopItem__boxLeft">
            <label className="desktopItem__label">ITEM DESCRIPTION:</label>{' '}
            <span className="desktopItem__valueDesc">
              {inventoryItem.description}
            </span>
            <label className="desktopItem__label">CATEGORY:</label>{' '}
            <span className="desktopItem__value">{inventoryItem.category}</span>
          </div>
          <div className="desktopItem__boxRight">
            <div className="desktopItem__boxRight-row1">
              <div className="flex-column">
                <label className="desktopItem__labelStatus">STATUS:</label>{' '}
                <span
                  className={`${
                    inventoryItem.status === 'In Stock'
                      ? 'desktopItem__inStock'
                      : 'desktopItem__outOfStock'
                  }`}
                >
                  {inventoryItem.status}
                </span>
              </div>
              <div className="flex-column">
                <label className="desktopItem__label">QUANTITY</label>{' '}
                <span className="desktopItem__value">
                  {inventoryItem.quantity}
                </span>
              </div>
            </div>
            <div className="desktopItem__boxRight-row2">
              <div className="flex-column">
                <label className="desktopItem__label">WAREHOUSE</label>{' '}
                <span className="desktopItem__value">
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
