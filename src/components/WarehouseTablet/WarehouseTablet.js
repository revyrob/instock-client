import "./WarehouseTablet.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import delteCan from "../../assets/icons/delete_outline-24px.svg";
import editPen from "../../assets/icons/edit-24px.svg";
import closeIcon from "../../assets/icons/close-24px.svg";

import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

//use the onclick function in the article component and not ArticleList because the articles are the onclick events
function WarehouseTablet({
  id,
  warehouse,
  address,
  contact,
  contactPhone,
  contactEmail,
  city,
  country,
}) {
  //two columns

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

  //getting correct path from .env
  const { REACT_APP_API_SERVER_URL } = process.env;

  //use to navigate back to warehouse page after delete
  let navigate = useNavigate();

  //function to delete the warehouse which is pressed on
  const deleteWarehouse = (e) => {
    e.preventDefault();
    axios
      .delete(`${REACT_APP_API_SERVER_URL}/warehouse/${id}`)
      .then((response) => {
        navigate("/warehouses");
        refreshPage();
        closeModal();
      })
      .catch((err) => console.log(err));
  };

  //need this to do the overlay for the modal
  const bg = {
    overlay: {
      background: "rgba(19, 24, 44, .6)",
    },
    content: {
      width: "42rem",
      height: "16.375rem",
      margin: "5.3125rem auto 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0px 2px 5px rgba(19, 24, 44, 0.1)",
      borderRadius: "3px",
    },
  };

  return (
    <section className="warehouseTablet">
      <div className="warehouseTablet__wrapper">
        <div className="warehouseTablet__info">
          <Link to={`/warehouses/${id}`}>
            <h2 className="warehouseTablet__location">
              {warehouse} <img src={chevron} alt="chevron right" />
            </h2>
          </Link>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__info--info">{address}</h2>
          <h2 className="warehouseTablet__info--info">
            {city}, {country}
          </h2>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__name">{contact}</h2>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__info--info">{contactPhone}</h2>
          <h2 className="warehouseTablet__info--info">{contactEmail}</h2>
        </div>

        <div className="warehouseTablet__info">
          <div className="warehouseTablet__icon--tablet">
            <img src={delteCan} alt="garbage can" onClick={openModal} />
            <Modal
              isOpen={deleteModal}
              onRequestClose={closeModal}
              contentLabel="Delete Warehouse"
              style={bg}
              ariaHideApp={false}
            >
              <div className="warehouseTablet__close" onClick={closeModal}>
                <img src={closeIcon} alt="close icon" />
              </div>
              <div className="warehouseTablet__modal">
                <div className="warehouseTablet__modal--textarea">
                  <h2 className="warehouseTablet__modal--title">
                    Delete {warehouse} warehouse?
                  </h2>
                  <p className="warehouseTablet__modal--text">
                    Please confirm that you'd like to delete the {warehouse}{" "}
                    from the list of warehouses. You won't be able to undo this
                    action.
                  </p>
                </div>
                <div className="warehouseTablet__modal--div">
                  <button
                    className="warehouseTablet__modal--btn warehouseTablet__modal--btn--cancel"
                    type="cancel"
                    onClick={closeModal}
                  >
                    <span className="btn-text">Cancel</span>
                  </button>

                  <button
                    className="warehouseTablet__modal--btn warehouseTablet__modal--btn--delete"
                    type="delete"
                    onClick={deleteWarehouse}
                  >
                    <span className="btn-text">Delete</span>
                  </button>
                </div>
              </div>
            </Modal>

            <Link to={`/warehouses/${id}/edit`}>
              <img src={editPen} alt="pen" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WarehouseTablet;
