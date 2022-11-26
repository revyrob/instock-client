import "./WarehouseMobile.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import delteCan from "../../assets/icons/delete_outline-24px.svg";
import editPen from "../../assets/icons/edit-24px.svg";
import Modal from "react-modal";
import { useState } from "react";
import closeIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

//use the onclick function in the article component and not ArticleList because the articles are the onclick events
function WarehouseMobile({
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

  return (
    <section className="warehouse">
      <div className="warehouse__wrapper">
        <div className="warehouse__div">
          <h2 className="warehouse__title">Warehouse</h2>

          <Link to={`/warehouses/${id}`}>
            <h2 className="warehouse__location">
              {warehouse}
              <img src={chevron} alt="right chevron" />
            </h2>
          </Link>

          <h2 className="warehouse__title">Address</h2>
          <h2 className="warehouse__info">
            {address}, {city}, {country}
          </h2>

          <div className="warehouse__icon" onClick={openModal}>
            <img src={delteCan} alt="garbage can" />
          </div>

          <Modal
            isOpen={deleteModal}
            className="warehouse__modal--modal"
            onRequestClose={closeModal}
            contentLabel="Delete Warehouse"
            ariaHideApp={false}
          >
            <div className="warehouse__close" onClick={closeModal}>
              <img src={closeIcon} alt="close icon" />
            </div>
            <div className="warehouse__modal">
              <div className="warehouse__modal--textarea">
                <h2 className="warehouse__modal--title">
                  Delete {warehouse} warehouse?
                </h2>
                <p className="warehouse__modal--text">
                  Please confirm that you'd like to delete the {warehouse} from
                  the list of warehouses. You won't be able to undo this action.
                </p>
              </div>
              <div className="warehouse__modal--div">
                <button
                  className="warehouse__modal--btn warehouse__modal--btn--cancel"
                  type="cancel"
                  onClick={closeModal}
                >
                  <span className="btn-text">Cancel</span>
                </button>

                <button
                  className="warehouse__modal--btn warehouse__modal--btn--delete"
                  type="delete"
                  onClick={deleteWarehouse}
                >
                  <span className="btn-text">Delete</span>
                </button>
              </div>
            </div>
          </Modal>
        </div>
        <div className="warehouse__div">
          <h2 className="warehouse__title">Contact Name</h2>
          <h2 className="warehouse__name">{contact}</h2>

          <h2 className="warehouse__title">Contact Information</h2>
          <h2 className="warehouse__info">
            {contactPhone} {contactEmail}
          </h2>

          <div className="warehouse__icon">
            <Link to={`/warehouses/${id}/edit`}>
              <img src={editPen} alt="pen" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WarehouseMobile;
