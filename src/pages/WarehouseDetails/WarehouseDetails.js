import './WarehouseDetails.scss';
import axios from 'axios';
// import { useEffect, useState } from 'react';

export default function WarehouseDetails() {
  return (
    <section className="warehouseDetails">
      <div className="pageHeader">
        <div className="pageHeader__title">
          image
          <p className="pageHeader__warehouse-name">Vancouver</p>
        </div>
        <div className="pageHeader__editBtn"> edit button</div>
      </div>

      <div className="contactInfo">
        <div className="contactInfo__addressBox">
          <label className="contactInfo__labelAddress">
            WAREHOUSE ADDRESS:
          </label>
          <p className="contactInfo__street">33 Pearl Street SW</p>
          <p className="contactInfo__city">Washington, USA</p>
        </div>
        <div className="contactInfo__wrapper">
          <div className="contactInfo__contactnameBox">
            <label className="contactInfo__labelName">CONTACT NAME:</label>
            <p className="contactInfo__name">33 Pearl Street SW</p>
            <p className="contactInfo__title">Washington, USA</p>
          </div>
          <div className="contactInfo__contactinfoBox">
            <label className="contactInfo__labelContact">CONTACT INFO:</label>
            <p className="contactInfo__phone">+1 (647) 504-0911</p>
            <p className="contactInfo__email">glyon@instock.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
