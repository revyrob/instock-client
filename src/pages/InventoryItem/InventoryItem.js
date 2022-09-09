import './InventoryItem.scss';

// import arrowSort from '../../assets/icons/sort-24px.svg';
// import chevron from '../../assets/icons/chevron_right-24px.svg';
// import delteCan from '../../assets/icons/delete_outline-24px.svg';
// import editPen from '../../assets/icons/edit-24px.svg';
import SearchBar from '../../components/SearchBar/SearchBar';

import axios from 'axios';
import { v4 as uuid } from 'uuid';

import { useEffect, useState } from 'react';

export default function WarehouseDetails() {
  const [inventoryItem, setInventoryItem] = useState([]);
  useEffect(() => {
    axios
      .get(
        'http://localhost:8080/inventory/9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3'
      )
      .then((payload) => {
        setInventoryItem(payload.data);
      });
  }, []);
  return (
    <section className="inventoryDetails">
      <div className="in-pageHeader">
        <div className="in-pageHeader__title">
          <p className="in-pageHeader__warehouse-name">Inventory</p>
        </div>
        <div className="in-pageHeader__flexbox">
          <SearchBar />
          <div className="in-pageHeader__addItemBtn">
            <span className="in-pageHeader__addItemBtnText">
              {' '}
              + Add New Item
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
