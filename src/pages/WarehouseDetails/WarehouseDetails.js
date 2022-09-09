import './WarehouseDetails.scss';

import arrowSort from '../../assets/icons/sort-24px.svg';
import chevron from '../../assets/icons/chevron_right-24px.svg';
import delteCan from '../../assets/icons/delete_outline-24px.svg';
import editPen from '../../assets/icons/edit-24px.svg';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';

import axios from 'axios';
import { v4 as uuid } from 'uuid';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function WarehouseDetails() {
  const [warehouseObj, setWarehouseObj] = useState({});
  const [inventoriesArr, setInventoriesArr] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouse/${id}/withinventory`)
      .then((payload) => {
        const { warehouse, inventories } = payload.data;
        setWarehouseObj(warehouse);
        setInventoriesArr(inventories);
        console.log(warehouse, inventories);
      });
  }, []);
  return (
    <section className="warehouseDetails">
      <div className="pageHeader">
        <div className="pageHeader__title">
          <img src={arrowBack} alt="back icon" />
          <p className="pageHeader__warehouse-name">
            {warehouseObj && warehouseObj?.city}
          </p>
        </div>
        <div className="pageHeader__editBtn">
          <img
            className="pageHeader__iconColor"
            src={editPen}
            alt="edit icon"
          />
          <span className="pageHeader__iconBtnTxt">Edit</span>
        </div>
      </div>

      <div className="warehouseAddress">
        <div className="warehouseAddress__addressBox">
          <label className="warehouseAddress__labelAddress">
            WAREHOUSE ADDRESS:
          </label>
          <p className="warehouseAddress__street">
            {warehouseObj && warehouseObj?.address}
          </p>
          <p className="warehouseAddress__city">
            {warehouseObj && warehouseObj?.city}{' '}
            {warehouseObj && warehouseObj?.country}
          </p>
        </div>
        <div className="warehouseAddress__wrapper">
          <div className="warehouseAddress__contactnameBox">
            <label className="warehouseAddress__labelName">CONTACT NAME:</label>
            <p className="warehouseAddress__name">
              {warehouseObj && warehouseObj?.contact?.name}
            </p>
            <p className="warehouseAddress__title">
              {' '}
              {warehouseObj?.contact?.position}
            </p>
          </div>
          <div className="warehouseAddress__warehouseAddressBox">
            <label className="warehouseAddress__labelContact">
              CONTACT INFO:
            </label>
            <p className="warehouseAddress__phone">
              {warehouseObj && warehouseObj?.contact?.phone}
            </p>
            <p className="warehouseAddress__email">
              {' '}
              {warehouseObj && warehouseObj?.contact?.email}
            </p>
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
          <p className="stillBox__labelTable">QUANTITY</p>
          <img
            className="stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>
        <div className="stillBox__box5"></div>
        <div className="stillBox__box6">ACTIONS</div>
      </div>

      {inventoriesArr &&
        inventoriesArr.map((inventory, i) => (
          <div className="magicBox" key={uuid()}>
            <div className="magicBox__box1">
              {' '}
              <label className="magicBox__labelMobile">Warehouse</label>
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
              <label className="magicBox__labelMobile">Category</label>

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
              <img src={delteCan} alt="delete icon" />
            </div>
            <div className="magicBox__box6">
              <img src={editPen} alt="edit icon" />
            </div>
          </div>
        ))}
    </section>
  );
}
