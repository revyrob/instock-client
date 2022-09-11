import './InventoryDetails.scss';

import arrowSort from '../../assets/icons/sort-24px.svg';
import chevron from '../../assets/icons/chevron_right-24px.svg';
import delteCan from '../../assets/icons/delete_outline-24px.svg';
import editPen from '../../assets/icons/edit-24px.svg';
import SearchBar from '../../components/SearchBar/SearchBar';
import closeIcon from '../../assets/icons/close-24px.svg';

import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Modal from 'react-modal';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function WarehouseDetails() {
  const [inventoriesArr, setInventoriesArr] = useState([]);
  let [selectedInventoryItem, setSelectedInventoryItem] = useState(null);
  let [nameInventoryItem, setNameInventoryItem] = useState(null);
  //getting correct path from .env
  const { REACT_APP_API_SERVER_URL } = process.env;

  useEffect(() => {
    axios.get(`${REACT_APP_API_SERVER_URL}/inventory`).then((payload) => {
      setInventoriesArr(payload.data);
    });
  }, []);

  //function to delete the inventory item which is pressed on
  const deleteWarehouse = (e, selectedInventoryItem, nameInventoryItem) => {
    e.preventDefault();
    axios
      .delete(`${REACT_APP_API_SERVER_URL}/inventory/${selectedInventoryItem}`)
      .then((response) => {
        navigate(`/inventory`);
        refreshPage();
        closeModal();
      })
      .catch((err) => console.log(`Error has occurred. ${err}`));
  };

  /*
   *Modal code
   */
  const [deleteModal, setDeleteModal] = useState(false);

  function openModal() {
    setDeleteModal(true);
  }

  function closeModal() {
    setDeleteModal(false);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  //use to navigate back to warehouse page after delete
  let navigate = useNavigate();

  //need this to do the overlay for the modal
  const bg =
    window.innerWidth > 786
      ? {
          overlay: {
            background: 'rgba(19, 24, 44, .6)',
          },
          content: {
            width: '42rem',
            height: '20rem',
            margin: '5.3125rem auto 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0px 2px 5px rgba(19, 24, 44, 0.1)',
            borderRadius: '3px',
          },
        }
      : { className: 'magicBox__box5__modal' };

  return (
    <section className="inventoryDetails">
      <div className="in-pageHeader">
        <div className="in-pageHeader__title">
          <p className="in-pageHeader__warehouse-name">Inventory</p>
        </div>
        <div className="in-pageHeader__flexbox">
          <SearchBar className="in-pageHeader__searchBar" />
          <Link to={'/inventory/new'}>
            <div className="in-pageHeader__addItemBtn">
              <span className="in-pageHeader__addItemBtnText">
                {' '}
                + Add New Item
              </span>
            </div>
          </Link>
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
                <Link to={`/inventory/${inventory.id}`}>
                  <p className="in-magicBox__labelItem">
                    {inventory.itemName}
                    <img
                      // className="in-magicBox__chevron"
                      src={chevron}
                      alt="icon chevron"
                    />
                  </p>
                </Link>
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
              <span className="in-magicBox__warehouseNameValue">
                {inventory.warehouseName}
              </span>
            </div>
            <div className="in-magicBox__box6">
              <img
                src={delteCan}
                alt="delete icon"
                onClick={() => {
                  setSelectedInventoryItem(inventory.id);
                  setNameInventoryItem(inventory.itemName);
                  openModal();
                }}
              />
              <Link to={`/inventory/${inventory.id}/edit`}>
                <img src={editPen} alt="edit icon" />
              </Link>
            </div>
          </div>
        ))}

      {/* start of code */}
      <Modal
        isOpen={deleteModal}
        onRequestClose={closeModal}
        contentLabel="Delete Warehouse"
        ariaHideApp={false}
        style={bg}
      >
        <div className="magicBox__box5__modal__close" onClick={closeModal}>
          <img src={closeIcon} alt="close icon" />
        </div>
        <div className="magicBox__box5__modal">
          <div className="magicBox__box5__modal--textarea">
            <h2 className="magicBox__box5__modal--title">
              Delete {nameInventoryItem} inventory item?
            </h2>
            <p className="magicBox__box5__modal--text">
              Please confirm that you'd like to delete {nameInventoryItem} from
              the inventory list. You won't be able to undo this action.
            </p>
          </div>
          <div className="magicBox__box5__modal--div">
            <button
              className="magicBox__box5__modal--btn magicBox__box5__modal--btn--cancel"
              type="cancel"
              onClick={closeModal}
            >
              {/* end of code */}
              <span className="btn-text">Cancel</span>
            </button>
            <button
              className="magicBox__box5__modal--btn magicBox__box5__modal--btn--delete"
              type="delete"
              onClick={(e) =>
                deleteWarehouse(e, selectedInventoryItem, nameInventoryItem)
              }
            >
              <span className="btn-text">Delete</span>
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
