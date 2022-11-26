import "./WarehouseDetails.scss";

import arrowSort from "../../assets/icons/sort-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import delteCan from "../../assets/icons/delete_outline-24px.svg";
import editPen from "../../assets/icons/edit-24px.svg";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import closeIcon from "../../assets/icons/close-24px.svg";

import axios from "axios";
import { v4 as uuid } from "uuid";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";

export default function WarehouseDetails() {
  const [warehouseObj, setWarehouseObj] = useState({});
  const [inventoriesArr, setInventoriesArr] = useState([]);
  let [selectedInventoryItem, setSelectedInventoryItem] = useState(null);
  let [nameInventoryItem, setNameInventoryItem] = useState(null);
  //getting correct path from .env
  const { REACT_APP_API_SERVER_URL } = process.env;

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouse/${id}/withinventory`)
      .then((payload) => {
        const { warehouse, inventories } = payload.data;
        setWarehouseObj(warehouse);
        setInventoriesArr(inventories);
      });
  }, []);

  //function to delete the inventory item which is pressed on
  const deleteWarehouse = (e, selectedInventoryItem, nameInventoryItem) => {
    e.preventDefault();

    axios
      .delete(`${REACT_APP_API_SERVER_URL}/inventory/${selectedInventoryItem}`)
      .then((response) => {
        navigate(`/warehouse/${id}`);
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
            background: "rgba(19, 24, 44, .6)",
          },
          content: {
            width: "42rem",
            height: "20rem",
            margin: "5.3125rem auto 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0px 2px 5px rgba(19, 24, 44, 0.1)",
            borderRadius: "3px",
          },
        }
      : { className: "magicBox__box5__modal" };

  return (
    <section className="warehouseDetails">
      <div className="pageHeader">
        <div className="pageHeader__title">
          <Link to="/warehouses">
            <img src={arrowBack} alt="back icon" />
          </Link>

          <p className="pageHeader__warehouse-name">
            {warehouseObj && warehouseObj?.name}
          </p>
        </div>
        <Link to={`/warehouses/${id}/edit`} className="pageHeader__linkEdit">
          <div className="pageHeader__editBtn">
            <img
              className="pageHeader__iconColor"
              src={editPen}
              alt="edit icon"
            />
            <span className="pageHeader__iconBtnTxt">Edit</span>
          </div>
        </Link>
      </div>

      <div className="warehouseAddress">
        <div className="warehouseAddress__addressBox">
          <label className="warehouseAddress__labelAddress">
            WAREHOUSE ADDRESS:
          </label>
          <p className="warehouseAddress__street">
            {warehouseObj && warehouseObj?.address},{" "}
            {warehouseObj && warehouseObj?.city},{" "}
            {warehouseObj && warehouseObj?.country}
          </p>
          {/* <p className="warehouseAddress__city">
            {warehouseObj && warehouseObj?.city}{" "}
            {warehouseObj && warehouseObj?.country}
          </p> */}
        </div>
        <div className="warehouseAddress__wrapper">
          <div className="warehouseAddress__contactnameBox">
            <label className="warehouseAddress__labelName">CONTACT NAME:</label>
            <p className="warehouseAddress__name">
              {warehouseObj && warehouseObj?.contact?.name}
            </p>
            <p className="warehouseAddress__title">
              {" "}
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
              {" "}
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
          {" "}
          <p className="stillBox__labelTable">CATEGORY</p>
          <img
            className="stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>
        <div className="stillBox__box3">
          {" "}
          <p className="stillBox__labelTable">STATUS</p>
          <img
            className="stillBox__arrowSort"
            src={arrowSort}
            alt="icon chevron"
          />
        </div>
        <div className="stillBox__box4">
          {" "}
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
              {" "}
              <label className="magicBox__labelMobile">Warehouse</label>
              <Link to={`../../inventory/${inventory.id}`}>
                <div className="flexbox">
                  <p className="magicBox__labelItem">
                    {inventory.itemName}{" "}
                    <img
                      // className="magicBox__chevron"
                      src={chevron}
                      alt="icon chevron"
                    />
                  </p>
                </div>
              </Link>
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
                  inventory.status === "In Stock"
                    ? "magicBox__inStock"
                    : "magicBox__outOfStock"
                }`}
              >
                {inventory.status}
              </span>
            </div>
            <div className="magicBox__box4">
              <label className="magicBox__labelMobile">QTY</label>{" "}
              <span className="magicBox__qtyValue">{inventory.quantity}</span>
            </div>
            <div
              className="magicBox__box5"
              onClick={() => {
                setSelectedInventoryItem(inventory.id);
                setNameInventoryItem(inventory.itemName);
                openModal();
              }}
            >
              <img src={delteCan} alt="delete icon" />
            </div>

            <Link to={`/inventory/${inventory.id}/edit`}>
              <div className="magicBox__box6">
                <img src={editPen} alt="edit icon" />
              </div>
            </Link>
          </div>
        ))}

      {/* start of code Modal */}
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
