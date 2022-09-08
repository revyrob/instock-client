import './InventoryDetails.scss';

import arrowSort from '../../assets/icons/sort-24px.svg';
import chevron from '../../assets/icons/chevron_right-24px.svg';
import delteCan from '../../assets/icons/delete_outline-24px.svg';
import editPen from '../../assets/icons/edit-24px.svg';
import SearchBar from '../../components/SearchBar/SearchBar';

import axios from 'axios';
import { v4 as uuid } from 'uuid';

import { useEffect, useState } from 'react';

export default function WarehouseDetails() {
  const [inventoriesArr, setInventoriesArr] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/inventory').then((payload) => {
      setInventoriesArr(payload.data);
    });
  }, []);
  return (
    <section className="warehouseDetails">
      <div className="pageHeader">
        <div className="pageHeader__title">
          <p className="pageHeader__warehouse-name">Inventory</p>
        </div>
        <div className="pageHeader__flexbox">
          <SearchBar />
          <div className="pageHeader__addItemBtn">
            <span className="pageHeader__addItemBtnText"> + Add New Item</span>
          </div>
        </div>
      </div>

      <div className="stillBox">
        <div className="stillBox__box1">
          <p className="stillBox__labelTable">INVENTORY ITEM</p>
          <img
            className="stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>
        <div className="stillBox__box2">
          {' '}
          <p className="stillBox__labelTable">CATEGORY</p>
          <img
            className="stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>
        <div className="stillBox__box3">
          {' '}
          <p className="stillBox__labelTable">STATUS</p>
          <img
            className="stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>
        <div className="stillBox__box4">
          {' '}
          <p className="stillBox__labelTable">QTY</p>
          <img
            className="stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>
        <div className="stillBox__box5">
          <p>WAREHOUSE</p>
          <img
            className="stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>

        <div className="stillBox__box7">ACTIONS</div>
      </div>

      {inventoriesArr &&
        inventoriesArr.map((inventory) => (
          <div className="magicBox" key={uuid()}>
            <div className="magicBox__box1">
              {' '}
              <label className="magicBox__labelMobile">INVENTORY ITEM</label>
              <div className="flexbox">
                <p className="magicBox__labelItem">{inventory.itemName}</p>
                <img
                  className="magicBox__chevron"
                  src={chevron}
                  alt="icon chevron"
                />
              </div>
            </div>
            <div className="magicBox__box2">
              <label className="magicBox__labelMobile">Category</label>
              <span className="magicBox__categoryValue">
                {inventory.category}
              </span>
            </div>
            <div className="magicBox__box3">
              <label className="magicBox__labelMobile">STATUS</label>

              <span
                className={`${
                  inventory.status === 'In Stock'
                    ? 'magicBox__inStock'
                    : 'magicBox__outOfStock'
                }`}
              >
                {inventory.status}
              </span>
            </div>
            <div className="magicBox__box4">
              <label className="magicBox__labelMobile">QTY</label>{' '}
              <span className="magicBox__qtyValue">{inventory.quantity}</span>
            </div>
            <div className="magicBox__box5">
              <label className="magicBox__labelMobile">WAREHOUSE</label>{' '}
              <span class="magicBox__warehouseNameValue">
                {inventory.warehouseName}
              </span>
            </div>
            <div className="magicBox__box6">
              <img src={delteCan} alt="delete icon" />
              <img src={editPen} alt="edit icon" />
            </div>
          </div>
        ))}
    </section>
  );
}
