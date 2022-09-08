import './WarehouseDetails.scss';
import arrowSort from '../../assets/icons/sort-24px.svg';
import chevron from '../../assets/icons/chevron_right-24px.svg';
import delteCan from '../../assets/icons/delete_outline-24px.svg';
import editPen from '../../assets/icons/edit-24px.svg';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

export default function WarehouseDetails() {
  return (
    <section className="warehouseDetails">
      <div className="pageHeader">
        <div className="pageHeader__title">
          <img src={arrowBack} alt="back icon" />
          <p className="pageHeader__warehouse-name">Vancouver</p>
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
          <p className="warehouseAddress__street">33 Pearl Street SW</p>
          <p className="warehouseAddress__city">Washington, USA</p>
        </div>
        <div className="warehouseAddress__wrapper">
          <div className="warehouseAddress__contactnameBox">
            <label className="warehouseAddress__labelName">CONTACT NAME:</label>
            <p className="warehouseAddress__name">33 Pearl Street SW</p>
            <p className="warehouseAddress__title">Washington, USA</p>
          </div>
          <div className="warehouseAddress__warehouseAddressBox">
            <label className="warehouseAddress__labelContact">
              CONTACT INFO:
            </label>
            <p className="warehouseAddress__phone">+1 (647) 504-0911</p>
            <p className="warehouseAddress__email">glyon@instock.com</p>
          </div>
        </div>
      </div>

      {/* <div className="warehouseList__wrapper">
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

      <div className="warehouseTablet__wrapper">
        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__location">
            warehouse <img src={chevron} alt="chevron right" />
          </h2>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__info--info">adress</h2>
          <h2 className="warehouseTablet__info--info">city</h2>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__name">contact</h2>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__info--info">phone</h2>
          <h2 className="warehouseTablet__info--info">email</h2>
        </div>

        <div className="warehouseTablet__info">
          <div className="warehouseTablet__icon--tablet">
            <img src={delteCan} alt="garbage can" />
            <img src={editPen} alt="pen" />
          </div>
        </div>
      </div> */}

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

      <div className="magicBox">
        <div className="magicBox__box1">
          {' '}
          <label className="magicBox__labelMobile">Warehouse</label>
          <div className="flexbox">
            <p className="magicBox__labelItem">telivision</p>
            <img
              className="magicBox__chevron"
              src={chevron}
              alt="icon chevron"
            />
          </div>
        </div>
        <div className="magicBox__box2">
          <label className="magicBox__labelMobile">Category</label>
          <span className="magicBox__categoryValue">Electronics</span>
        </div>
        <div className="magicBox__box3">
          <label className="magicBox__labelMobile">Category</label>
          <span className="magicBox__instock">IN STOCK</span>
        </div>
        <div className="magicBox__box4">
          <label className="magicBox__labelMobile">QTY</label>{' '}
          <span className="magicBox__qtyValue">500</span>
        </div>
        <div className="magicBox__box5">
          <img src={delteCan} alt="delete icon" />
        </div>
        <div className="magicBox__box6">
          <img src={editPen} alt="edit icon" />
        </div>
      </div>
    </section>
  );
}
