import './InventoryDetails.scss';

import arrowSort from '../../assets/icons/sort-24px.svg';
import chevron from '../../assets/icons/chevron_right-24px.svg';
import delteCan from '../../assets/icons/delete_outline-24px.svg';
import editPen from '../../assets/icons/edit-24px.svg';
import SearchBar from '../../components/SearchBar/SearchBar';

import axios from 'axios';
import { v4 as uuid } from 'uuid';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function WarehouseDetails() {
  const [inventoriesArr, setInventoriesArr] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/inventory').then((payload) => {
      setInventoriesArr(payload.data);
    });
  }, []);
  return (
    <section className="inventoryDetails">
      <div className="in-pageHeader">
        <div className="in-pageHeader__title">
          <p className="in-pageHeader__warehouse-name">Inventory</p>
        </div>
        <div className="in-pageHeader__flexbox">
          <SearchBar className="in-pageHeader__searchBar" />
          <div className="in-pageHeader__addItemBtn">
            <span className="in-pageHeader__addItemBtnText">
              {' '}
              + Add New Item
            </span>
          </div>
        </div>
      </div>

      <div className="in-stillBox">
        <div className="in-stillBox__box1">
          <p className="in-stillBox__labelTable">INVENTORY ITEM</p>
          <img
            className="in-stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>
        <div className="in-stillBox__box2">
          {' '}
          <p className="in-stillBox__labelTable">CATEGORY</p>
          <img
            className="in-stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>
        <div className="in-stillBox__box3">
          {' '}
          <p className="in-stillBox__labelTable">STATUS</p>
          <img
            className="in-stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>
        <div className="in-stillBox__box4">
          {' '}
          <p className="in-stillBox__labelTable">QTY</p>
          <img
            className="in-stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>
        <div className="in-stillBox__box5">
          <p>WAREHOUSE</p>
          <img
            className="in-stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>

        <div className="in-stillBox__box7">ACTIONS</div>
      </div>

      {inventoriesArr &&
        inventoriesArr.map((inventory) => (
          <div className="in-magicBox" key={uuid()}>
            <div className="in-magicBox__box1">
              {' '}
              <label className="in-magicBox__labelMobile">INVENTORY ITEM</label>
              <div className="flexbox">
                <Link
                  to={`/inventory/${inventory.id}`}
                  className="in-magicBox__link"
                >
                  <p className="in-magicBox__labelItem">{inventory.itemName}</p>
                </Link>
                <img
                  className="in-magicBox__chevron"
                  src={chevron}
                  alt="icon chevron"
                />
              </div>
            </div>
            <div className="in-magicBox__box2">
              <label className="in-magicBox__labelMobile">Category</label>
              <span className="in-magicBox__categoryValue">
                {inventory.category}
              </span>
            </div>
            <div className="in-magicBox__box3">
              <label className="in-magicBox__labelMobile">STATUS</label>

              <span
                className={`${
                  inventory.status === 'In Stock'
                    ? 'in-magicBox__inStock'
                    : 'in-magicBox__outOfStock'
                }`}
              >
                {inventory.status}
              </span>
            </div>
            <div className="in-magicBox__box4">
              <label className="in-magicBox__labelMobile">QTY</label>{' '}
              <span className="in-magicBox__qtyValue">
                {inventory.quantity}
              </span>
            </div>
            <div className="in-magicBox__box5">
              <label className="in-magicBox__labelMobile">WAREHOUSE</label>{' '}
              <span class="in-magicBox__warehouseNameValue">
                {inventory.warehouseName}
              </span>
            </div>
            <div className="in-magicBox__box6">
              <img src={delteCan} alt="delete icon" />
              <img src={editPen} alt="edit icon" />
            </div>
          </div>
        ))}
    </section>
  );
}
