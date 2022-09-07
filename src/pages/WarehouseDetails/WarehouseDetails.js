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
    </section>
  );
}
